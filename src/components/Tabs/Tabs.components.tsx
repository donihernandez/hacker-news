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
    isFirst,
    isLast,
    children
}) => {
    return (
        <button className={`tab ${isFirst && 'first'} ${isLast && 'last'}`}>
            {children}
        </button>
    )
}

export {
    TabsContainer,
    Tab
}