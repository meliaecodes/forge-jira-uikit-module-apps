import React, { useEffect, useState } from 'react';
import { events } from '@forge/bridge';
import { Text } from '@forge/react';

export const IssuePanel = () => {
  const [initialEventData, setInitialEventData] = useState();
  const [updatedEventData, setUpdatedEventData] = useState();

  useEffect(() => {
    // Subscribe to initial data and updated data
    const subscriptions = [
      events.on('app.initial-data', setInitialEventData),
      events.on('app.data-changed', setUpdatedEventData)
    ];

    // Request initial data from the background script
    events.emit('app.request-initial-data');

    return () => {
      subscriptions.forEach((subscription) => subscription.then((subscription) => subscription.unsubscribe()));
    };
  }, []);

  return (
    <>
      <Text>Initial data: {JSON.stringify(initialEventData)}</Text>
      <Text>Updated data: {JSON.stringify(updatedEventData)}</Text>
    </>
  );
};
