import {combineReducers} from 'redux';

import calls from './callReducer';

const appReducer = combineReducers({
  calls
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
