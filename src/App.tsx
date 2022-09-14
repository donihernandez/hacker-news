import type { FC } from 'react'
import { Header, Tabs } from './components';
import { TabsProvider } from './contexts/TabsContext';

const App: FC = () => {
 

  return (
    <>
      <Header />
      <TabsProvider>
        <Tabs />
      </TabsProvider>
    </>
  );
}

export default App;
