import { ReactNode } from "react";

interface ITabsProps {
    tabs: ITab[];
    updateActive: (id: number) => void;
}

interface ITab {
    id: number;
    title: string;
    isActive?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
}

interface IChildrenProps {
    children: ReactNode
}

interface ITabProps {
    id: number;
    isActive?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
    children: ReactNode;
    onClick: (id: number) => void;
}

export type {
    ITab,
    ITabsProps,
    IChildrenProps,
    ITabProps
}