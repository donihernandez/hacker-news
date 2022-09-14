import { ReactNode } from "react";

interface ITabsProps {
    tabs: ITab[];
    activeTab: number;
    setActiveTab: (id: number) => void;
}

interface ITab {
    id: number;
    title: string;
    isFirst?: boolean;
    isLast?: boolean;
}

interface IChildrenProps {
    children: ReactNode
}

interface ITabProps {
    id: number;  
    isFirst?: boolean;
    isLast?: boolean;
    children: ReactNode;
}

export type {
    ITab,
    ITabsProps,
    IChildrenProps,
    ITabProps
}