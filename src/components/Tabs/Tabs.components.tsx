import React from 'react'
import { FC } from 'react'
import { IChildrenProps, ITabProps } from '../../typings'

import './Tabs.css'

const TabsContainer: FC<IChildrenProps> = ({ children }) => {
    return (
        <div className='tabs__container'>
            {children}
        </div>
    )
}

const Tab: FC<ITabProps> = ({
    id,
    isActive,
    isFirst,
    isLast,
    onClick,
    children
}) => {
    return (
        <button onClick={() => onClick(id)} className={`tab ${isActive && 'active'} ${isFirst && 'first'} ${isLast && 'last'}`}>
            {children}
        </button>
    )
}

export {
    TabsContainer,
    Tab
}