import { combineReducers } from 'redux';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  // other reducers
});

export default rootReducer;
