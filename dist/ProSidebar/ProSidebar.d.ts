import React from 'react';
export declare type Props = React.HTMLAttributes<HTMLElement> & {
    collapsed?: boolean;
    rtl?: boolean;
    toggled?: boolean;
    width?: string | number;
    collapsedWidth?: string | number;
    image?: string;
    className?: string;
    children?: React.ReactNode;
    breakPoint?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    onToggle?: (value: boolean) => void;
    style?: React.CSSProperties;
};
export interface SidebarContextProps {
    collapsed: boolean;
    rtl: boolean;
    toggled: boolean;
}
export declare const SidebarContext: any;
declare const _default: any;
export default _default;
