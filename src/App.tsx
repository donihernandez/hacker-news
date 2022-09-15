import type { FC } from 'react';
import { Header, Tabs } from './components';
import { NewsProvider, TabsProvider } from './contexts';

const App: FC = () => {
    return (
        <main>
            <Header />
            <TabsProvider>
                <NewsProvider>
                    <Tabs />
                </NewsProvider>
            </TabsProvider>
        </main>
    );
};

export default App;
