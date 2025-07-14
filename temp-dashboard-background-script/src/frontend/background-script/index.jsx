import { useEffect } from 'react';
import { events } from '@forge/bridge';

export const BackgroundScript = () => {
  useEffect(() => {
    const getData = () => Math.random();
    const initialData = getData();

    // Emit the data for already existing gadgets
    events.emit('app.initial-data', initialData);

    // Listen to new gadgets requesting the data
    const subscription = events.on('app.request-initial-data', () => {
      events.emit('app.initial-data', initialData);
    });

    // Simulate data change
    const interval = setInterval(() => {
      events.emit('app.data-changed', getData());
    }, 1000);

    return () => {
      clearInterval(interval);
      subscription.then((subscription) => subscription.unsubscribe());
    };
  }, []);

  return null;
};
