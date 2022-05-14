import { AppDBInterface } from '../dexie-instance';

export default function getAppView(appDB: AppDBInterface, event: MessageEvent<any>) {
  appDB.open()
    .then(() => {
      return appDB.campaigns.where('isSelected').equals('true').toArray();
    })
    .then((selectedCampaign) => {
      if (selectedCampaign.length === 1) {
        return event.ports[0].postMessage([
          {
            payload: {
              appView: 'Campaign',
              campaignName: selectedCampaign[0].name
            }
          }
        ]);
      }
      return event.ports[0].postMessage([
        {
          payload: {
            appView: 'Home',
            campaignName: ''
          }
        }
      ]);
    });
}
