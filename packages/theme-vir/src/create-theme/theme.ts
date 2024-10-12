import {DeclarativeElementDefinition} from 'element-vir';
import {HeadingLevel} from './theme-options.js';

export type Theme<TagPrefix extends string> = {
    elements: {
        bold: DeclarativeElementDefinition<`${TagPrefix}-b`>;
        monospace: DeclarativeElementDefinition<`${TagPrefix}-monospace`>;
        paragraph: DeclarativeElementDefinition<`${TagPrefix}-p`>;
        code: DeclarativeElementDefinition<`${TagPrefix}-code`>;
        heading: DeclarativeElementDefinition<`${TagPrefix}-heading`, {headingLevel: HeadingLevel}>;
    };
};
