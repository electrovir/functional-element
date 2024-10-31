import {defineCssVars} from 'lit-css-vars';

/**
 * CSS vars for animation or transition durations from Vira.
 *
 * @category Styles
 * @category CSS Vars
 */
export const viraAnimationDurations = defineCssVars({
    /**
     * A longer duration used to show a full animation. Use this sparingly; make sure to not block
     * any user input with this animation.
     */
    'vira-extended-animation-duration': '1.2s',
    /** A longer duration used to emphasize the animation without totally aggravating a user. */
    'vira-pretty-animation-duration': '300ms',
    /**
     * A short duration used for user interactions. This duration is very short to ensure snappy
     * responses to user interactions.
     *
     * The default duration of 84ms gives us 5 frames on a 60Hz screen.
     */
    'vira-interaction-animation-duration': '84ms',
});
