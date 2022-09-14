import { createContext, useContext } from 'react';

const TabsContext = createContext(null);
TabsContext.displayName = 'TabsContext';

const useTabsContext = () => {
    return useContext(TabsContext);
};

export { useTabsContext, TabsContext };
