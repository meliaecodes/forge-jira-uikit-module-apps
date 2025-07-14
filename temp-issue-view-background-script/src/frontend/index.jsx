import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text } from '@forge/react';
import { view } from '@forge/bridge';
import { BackgroundScript } from './background-script';
import { IssuePanel } from './issue-panel';

const App = () => {
  const [context, setContext] = useState();

  useEffect(() => {
    view.getContext().then(setContext);
  }, []);

  switch (context?.extension.type) {
    case 'jira:issueViewBackgroundScript':
      return <BackgroundScript />;
    case 'jira:issuePanel':
      return <IssuePanel />;
    default:
      return <Text>Loading...</Text>;
  }
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
