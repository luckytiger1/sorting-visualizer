import { combineReducers } from 'redux';
import arrayListReducer from './arrayListReducer';

const reducer = combineReducers({
  arrayList: arrayListReducer,
});

export default reducer;
