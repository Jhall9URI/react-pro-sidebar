import React from 'react';
export declare type IconShapeType = 'square' | 'round' | 'circle';
export declare type Props = React.HTMLAttributes<HTMLElement> & {
    className?: string;
    children?: React.ReactNode;
    iconShape?: IconShapeType;
    popperArrow?: boolean;
};
declare const _default: any;
export default _default;
