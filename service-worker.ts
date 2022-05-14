import { appDB } from './src/service-worker/dexie-instance';
import { getAppView, addCampaign } from './src/service-worker/db-functions';

self.addEventListener('install', function () {
  appDB.version(1).stores({
    campaigns: 'name, isSelected'
  });
});

self.addEventListener('activate', async () => {
  console.log('Service Worker Activated');
});

self.addEventListener('message', async (event) => {
  if (event.data.type === 'GET_APP_VIEW') {
    return getAppView(appDB, event);
  };

  if (event.data.type === 'ADD_CAMPAIGN') {
    return addCampaign(appDB, event);
  };
});
