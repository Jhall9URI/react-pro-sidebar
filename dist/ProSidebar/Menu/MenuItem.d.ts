import React from 'react';
export declare type Props = React.LiHTMLAttributes<HTMLLIElement> & {
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    active?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    firstchild?: boolean;
    popperarrow?: boolean;
    clickHandler?: () => void;
};
declare const _default: any;
export default _default;
