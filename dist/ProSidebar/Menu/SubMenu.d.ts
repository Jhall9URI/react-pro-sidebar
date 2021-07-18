import React from 'react';
export declare type Props = React.LiHTMLAttributes<HTMLLIElement> & {
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    firstchild?: boolean;
    popperarrow?: boolean;
    onOpenChange?: (open: boolean) => void;
    clickHandler?: () => void;
};
declare const _default: any;
export default _default;
