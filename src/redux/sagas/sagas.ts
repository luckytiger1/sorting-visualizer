import { call, all } from 'redux-saga/effects';
import { mergeSortSagasWatcher } from './mergeSort.sagas';

export default function* rootSaga() {
  yield all([call(mergeSortSagasWatcher)]);
}
