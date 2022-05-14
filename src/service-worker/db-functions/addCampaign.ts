import { AppDBInterface } from '../dexie-instance';

export default function addCampaign(appDB: AppDBInterface, event: MessageEvent<any>) {
  appDB.open()
    .then(() => {
      return appDB.campaigns.add({
        name: event.data.payload,
        isSelected: 'true'
      });
    })
    .then(() => {
      return event.ports[0].postMessage([
        {
          payload: {
            appView: 'Campaign',
            campaignName: event.data.payload
          }
        }
      ]);
    })
    .catch((error) => {
      return event.ports[0].postMessage([
        {
          view: 'Error',
          payload: {
            error
          }
        }
      ]);
    });
}
