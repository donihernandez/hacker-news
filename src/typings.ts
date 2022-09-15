import React, { ReactNode } from 'react';

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
    children: ReactNode;
}

interface ITabProps {
    id: number;
    isFirst?: boolean;
    isLast?: boolean;
    children: ReactNode;
}

interface ITabsContext {
    activeTab: number;
    currentOption: string;
    options: IDropdown[];
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
    setCurrentOption: React.Dispatch<React.SetStateAction<string>>;
    setTabs: React.Dispatch<React.SetStateAction<ITab[]>>;
    tabs: ITab[];
}

interface IDropdown {
    image: string;
    value: string;
}

export type {
    ITab,
    ITabsProps,
    IChildrenProps,
    ITabProps,
    ITabsContext,
    IDropdown,
};
