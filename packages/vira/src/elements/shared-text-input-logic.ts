import {extractEventTarget} from '@augment-vir/web';

/**
 * Inputs shared between the multiple input elements.
 *
 * @category Internal
 */
export type SharedTextInputElementInputs = {
    value: string;
    /** Shown when no other text is present. Input restrictions do not apply to this property. */
    placeholder?: string;
    /** Set to true to trigger disabled styles and to block all user input. */
    disabled?: boolean;
    /**
     * Only letters in the given string or matches to the given RegExp will be allowed.
     * blockedInputs takes precedence over this input.
     *
     * For example: if allowedInputs is set to "abcd" and blockedInputs is set to "d", only "a",
     * "b", or "c" letters will be allowed.
     */
    allowedInputs?: string | RegExp;
    /** Any letters in the given string or matches to the given RegExp will be blocked. */
    blockedInputs?: string | RegExp;
    /** Disable all browser helps like spellchecking, autocomplete, etc. */
    disableBrowserHelps?: boolean;
    /** Set this to true to make the whole element size to only fit the input text. */
    fitText?: boolean;
};

function doesMatch({input, matcher}: {input: string; matcher: string | RegExp}): boolean {
    if (!input || !matcher) {
        return true;
    }
    if (input.length > 1) {
        return !!input.split('').every((singleInput) => doesMatch({input: singleInput, matcher}));
    }

    if (matcher instanceof RegExp) {
        return !!input.match(matcher);
    } else {
        return matcher.includes(input);
    }
}

/**
 * Inputs used to check if the current input element value is allowed.
 *
 * @category Internal
 */
export type IsAllowedInputs = {
    value: string;
    allowed: string | RegExp | undefined;
    blocked: string | RegExp | undefined;
};

function isAllowed({value, allowed, blocked}: IsAllowedInputs) {
    const isAllowedCharacter = allowed
        ? doesMatch({
              input: value,
              matcher: allowed,
          })
        : true;
    const isBlockedCharacter = blocked
        ? doesMatch({
              input: value,
              matcher: blocked,
          })
        : false;

    return isAllowedCharacter && !isBlockedCharacter;
}

/**
 * Filters out blocked text from an input element's value.
 *
 * @category Internal
 */
export function filterTextInputValue(inputs: IsAllowedInputs): {
    filtered: string;
    blocked: string;
} {
    if (!inputs.value) {
        return {filtered: inputs.value, blocked: ''};
    }
    const {filtered, blocked} = inputs.value.split('').reduce(
        (accum, letter) => {
            const allowed = isAllowed({...inputs, value: letter});

            if (allowed) {
                accum.filtered.push(letter);
            } else {
                accum.blocked.push(letter);
            }
            return accum;
        },
        {
            filtered: [] as string[],
            blocked: [] as string[],
        },
    );

    return {
        filtered: filtered.join(''),
        blocked: blocked.join(''),
    };
}

/**
 * A function to be called when an input element's value changes.
 *
 * @category Internal
 */
export function textInputListener({
    inputs,
    filteredValue,
    event,
    inputBlockedCallback,
    newValueCallback,
}: {
    inputs: SharedTextInputElementInputs;
    filteredValue: string;
    event: Event;
    inputBlockedCallback: (blockedInput: string) => void;
    newValueCallback: (newValue: string) => void;
}) {
    if (!(event instanceof InputEvent)) {
        throw new TypeError('Text input event was not an InputEvent.');
    }

    const inputElement = extractEventTarget(event, HTMLInputElement);
    /**
     * This is usually a single character, but can be a bunch of characters in some circumstances.
     * For example, when a bunch of characters are pasted, this will be the entire pasted contents.
     */
    const changedText = event.data;
    const beforeChangeText = filteredValue;

    // this will be overwritten below if blocked characters are encountered
    let finalText = inputElement.value;

    /**
     * When changedText is falsy, that means an operation other than inserting characters happened.
     * Such as: deleting, cutting the text, etc.
     */
    if (changedText) {
        if (changedText.length === 1) {
            if (
                !isAllowed({
                    value: changedText,
                    allowed: inputs.allowedInputs,
                    blocked: inputs.blockedInputs,
                })
            ) {
                // prevent the change from happening
                finalText = beforeChangeText;
                inputBlockedCallback(changedText);
            }
        }
        // filters out blocked pasted letters
        else {
            const {filtered, blocked} = filterTextInputValue({
                value: changedText,
                allowed: inputs.allowedInputs,
                blocked: inputs.blockedInputs,
            });
            finalText = filtered;
            inputBlockedCallback(blocked);
        }
    }

    if (inputElement.value !== finalText) {
        // this prevents blocked inputs by simply overwriting them
        inputElement.value = finalText;
    }
    if (beforeChangeText !== finalText) {
        newValueCallback(finalText);
    }
}
