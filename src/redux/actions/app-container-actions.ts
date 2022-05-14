import { wb } from '../../workbox/workbox-instance';
import { ACTION_CONSTANTS as AC } from '../constants';
import { AppDispatch } from '../store';

const APP_CONTAINER_ACTIONS = {
  getAppView() {
    return async (dispatch: AppDispatch) => {
      try {
        const DBResponse = await wb!.messageSW({ type: 'GET_APP_VIEW' });        
        dispatch({
          type: AC.GET_APP_VIEW.SUCCESS,
          payload: DBResponse[0].payload
        });
      } catch (error) {
        dispatch({ type: AC.GET_APP_VIEW.FAILURE, payload: error });
      }
    }
  },
  addCampaign(event: Event) {
    return async(dispatch: AppDispatch) => {
      try {
        const form = event.target as HTMLFormElement;
        const input = form[0] as HTMLInputElement;
        const campaignName: string = input.value;

        const DBResponse = await wb!.messageSW({ type: 'ADD_CAMPAIGN', payload: campaignName });

        dispatch({
          type: AC.UPDATE_APP_VIEW.SUCCESS,
          payload: DBResponse[0].payload
        });
      } catch(error) {
        dispatch({ type: AC.GET_APP_VIEW.FAILURE, payload: error });
      }
    }
  }
}

export default APP_CONTAINER_ACTIONS;

