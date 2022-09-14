import type { FC } from "react"
import { ITabsProps } from "../../typings"
import { Tab, TabsContainer } from "./Tabs.components"
import './Tabs.css'

const Tabs: FC<ITabsProps> = ({ tabs, updateActive }) => {
    return (
        <TabsContainer>
            {
                tabs.map(tab =>
                (
                    <Tab
                        id={tab.id}
                        key={tab.id}
                        isActive={tab.isActive}
                        isFirst={tab.isFirst}
                        isLast={tab.isLast}
                        onClick={updateActive}
                    >
                        {tab.title}
                    </Tab>
                ))
            }
        </TabsContainer>
    )
}

export { Tabs }
