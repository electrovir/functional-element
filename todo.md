-   convert `stateInitStatic` into a function named `stateInit` or collapse it as the return of `init`
    -   I can't get this to work, TS won't correctly infer the state type
-   remove `isStrictInstance`
-   add testIds to an element's definition
-   allow arbitrary static data in the element definition
-   unify event types with the `typed-event-listener` package
-   expose host classes in the `render` callback.