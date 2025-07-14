import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text } from '@forge/react';
import { view } from '@forge/bridge';
import { BackgroundScript } from './background-script';
import { Gadget } from './gadget';

const App = () => {
  const [context, setContext] = useState();

  useEffect(() => {
    view.getContext().then(setContext);
  }, []);

  switch (context?.extension.type) {
    case 'jira:dashboardBackgroundScript':
      return <BackgroundScript />;
    case 'jira:dashboardGadget':
      return <Gadget />;
    default:
      return <Text>Loading...</Text>;
  }
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
