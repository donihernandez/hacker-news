import React, { ReactNode } from 'react';

interface ITabsProps {
    tabs: ITab[];
    activeTab: number;
    setActiveTab: (id: number) => void;
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

interface IPageButtonProps {
    page: number;
}

interface INewsProps {
    news: INews;
}

interface IPaginationProps {
    totalPages: number;
    pageSize: number;
    siblingCount: number;
    currentPage: number;
}

interface ITab {
    id: number;
    title: string;
    isFirst?: boolean;
    isLast?: boolean;
}

interface ITabsContext {
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
    setTabs: React.Dispatch<React.SetStateAction<ITab[]>>;
    tabs: ITab[];
}

interface INewsContext {
    currentPage: number;
    news: INews[];
    currentOption: string;
    options: IDropdown[];
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setCurrentOption: React.Dispatch<React.SetStateAction<string>>;
    setNews: React.Dispatch<React.SetStateAction<any>>;
    totalPages: number;
    setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

interface INews {
    id: string;
    author: string;
    title: string;
    url: string;
    date: string;
    isFavorite: boolean;
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
    INewsProps,
    ITabsContext,
    IDropdown,
    IPageButtonProps,
    INewsContext,
    INews,
    IPaginationProps,
};
