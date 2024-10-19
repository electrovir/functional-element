/**
 * Extra options for defining elements. These should be used very rarely.
 *
 * @category Internal
 */
export type DeclarativeElementDefinitionOptions = {
    /** For internal use only. */
    ignoreUnsetInputs: boolean;
    /**
     * If set to true, state property keys will be allowed to change at run time. Turning this on
     * will greatly reduce type safety and should be avoided.
     */
    allowPolymorphicState: boolean;
};

/**
 * Default values for {@link DeclarativeElementDefinitionOptions}.
 *
 * @internal
 */
export const defaultDeclarativeElementDefinitionOptions: DeclarativeElementDefinitionOptions = {
    ignoreUnsetInputs: true,
    allowPolymorphicState: false,
};
