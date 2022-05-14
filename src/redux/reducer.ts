import { Reducer } from "@reduxjs/toolkit";
import { ACTION_CONSTANTS as AC } from './constants';

const INITIAL_STATE = {
  appView: 'Loading'
}

export const rootReducer: Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case '@@INIT':
      return state;
    case AC.GET_APP_VIEW.SUCCESS:
      return {
        ...state,
        appView: action.payload.appView,
        campaignName: action.payload.campaignName
      };
    case AC.GET_APP_VIEW.FAILURE:
      return {
        ...state,
        appView: 'error',
        campaignName: ''
      };
    case AC.UPDATE_APP_VIEW.SUCCESS:
      return {
        ...state,
        appView: action.payload.appView,
        campaignName: action.payload.campaignName
      };
  }
};
