import type { FC } from 'react';
import { Header, Tabs } from './components';
import { TabsProvider } from './contexts/TabsContext';

const App: FC = () => {
    return (
        <main>
            <Header />
            <TabsProvider>
                <Tabs />
            </TabsProvider>
        </main>
    );
};

export default App;
