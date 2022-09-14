import type { FC } from 'react';
import { useTabsContext } from '../../contexts/TabsContext';
import { ITab } from '../../typings';
import { Tab, TabsContainer } from './Tabs.components';
import './Tabs.css';

const Tabs: FC = () => {
    const { tabs } = useTabsContext();

    return (
        <TabsContainer>
            {tabs.map((tab: ITab) => (
                <Tab
                    id={tab.id}
                    isFirst={tab.isFirst}
                    isLast={tab.isLast}
                    key={tab.id}
                >
                    {tab.title}
                </Tab>
            ))}
        </TabsContainer>
    );
};

export { Tabs };
