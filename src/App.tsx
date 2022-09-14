import type { FC } from 'react'
import { useState } from 'react';
import { Header, Tabs } from './components';

import { ITab } from './typings';

const App: FC = () => {
   const [tabs, setTabs] = useState<ITab[]>([
    {
      id: 1,
      title: 'All',
      isActive: true,
      isFirst: true,
    },
    {
      id: 2,
      title: 'My Faves',
      isLast: true,
    }
  ])

  const updateActive = (id: number) => {
    console.log(id);
  }

  return (
    <>
      <Header />
      <Tabs tabs={tabs} updateActive={updateActive} />
    </>
  );
}

export default App;
