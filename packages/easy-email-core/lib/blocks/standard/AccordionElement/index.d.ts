import { IBlockData } from '../../../typings';
export type IAccordionElement = IBlockData<{
    'icon-width': string;
    'icon-height': string;
    'container-background-color'?: string;
    border?: string;
    'inner-padding'?: string;
    'font-family'?: string;
    'icon-align'?: 'middle' | 'top' | 'bottom';
    'icon-position': 'left' | 'right';
    'icon-unwrapped-alt'?: string;
    'icon-unwrapped-url'?: string;
    'icon-wrapped-alt'?: string;
    'icon-wrapped-url'?: string;
}, {}>;
export declare const AccordionElement: import("../../../typings").IBlock<IAccordionElement>;
