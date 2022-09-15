import type { FC } from 'react';
import { useTabsContext } from '../../contexts/TabsContext';
import { ITab } from '../../typings';
import AllNews from '../AllNews/AllNews';
import FavNews from '../FavNews/FavNews';
import { Tab, TabsContainer } from './Tabs.components';
import './Tabs.css';

const Tabs: FC = () => {
    const { tabs, activeTab } = useTabsContext();

    return (
        <section className="tabs__section">
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
            {activeTab === 1 ? <AllNews /> : <FavNews />}
        </section>
    );
};

export { Tabs };
