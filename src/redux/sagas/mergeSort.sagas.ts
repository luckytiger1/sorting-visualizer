import {
  takeEvery,
  put,
  select,
  call,
  delay,
  takeLatest,
  cancelled,
  fork,
  take,
  cancel,
} from 'redux-saga/effects';
import {
  mergeSortArrayList,
  sortingStart,
  sortingFinish,
  updateArrayList,
} from '../actions/arrayList.actions';
import { selectArray, selectSorting } from '../selectors/arrayList.selector';
import { getMergeSortAnimations } from '../../mergeSortAlg';

export const merge = async (arr1: any, arr2: any) => {
  let sorted = [];
  while (arr1.length && arr2.length) {
    // await sleep(10);
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    else sorted.push(arr2.shift());
  }
  return sorted.concat(arr1.slice().concat(arr2.slice()));
};
const sleep = async (ms: any) => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log('here');
      res();
    }, ms);
  });
};
const mergeSortArr = (arrayList: any, sorting: any) => {
  const animations = getMergeSortAnimations(arrayList);

  // const speed =
  //   570 - Math.pow(arrayList.length, 2) > 0
  //     ? 570 - Math.pow(arrayList.length, 2)
  //     : 0;
  // console.log(animations);
  let timeout;

  for (let i = 0; i < animations.length; i++) {
    const arrayBars: any = document.querySelectorAll('.arrayElement');
    const isColorChange = i % 3 !== 2;
    // console.log('working');
    // console.log(i * 10);

    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? 'red' : '#A997DF';
      timeout = setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * 10);
    } else {
      timeout = setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight * 3}px`;
      }, i * 10); 
      // if (i === 20) {
      //   console.log('here is 20');

      //   clearTimeout(timeout);
      // }
    }
  }
  // dispatch({ type: 'SORTING_FINISH' });
  return timeout;
  // console.log('finished');
};
// const speed = 570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;
export const mergeSort = async (arr: number[]) => {
  if (arr.length <= 1) return arr;
  await sleep(10);

  // await sleep(interpolateSpeed('50'));
  const mid = Math.floor(arr.length / 2),
    left: any = await mergeSort(arr.slice(0, mid)),
    right: any = await mergeSort(arr.slice(mid));
  return await merge(left, right);
};

export const cancelSorting = () => {};

export function* mergeSortSagasWorker() {
  const arrayList = yield select(selectArray);
  //   yield delay(1000);
  //   yield call(mergeSortArr, arrayList);
  const sorting = yield select(selectSorting);
  console.log(sorting);

  yield call(mergeSortArr, arrayList, sorting);

  // if (!sorting) {
  //   console.log('here');

  //   yield call(clearTimeout, time);
  // } else {
  //   console.log('is sorting');
  // }

  // yield put(sortingFinish());
  //   try {
  //     while (true) {
  //     }
  //   } finally {
  //     if (yield cancelled()) yield put(updateArrayList(5));
  //   }
  //   yield put(mergeSortArrayList(sortedArray));
}

export function* mergeSortSagasWatcher() {
  while (true) {
    yield take('MERGE_SORT_ARRAY');
    yield fork(mergeSortSagasWorker);
  }
  //   while (yield take('MERGE_SORT_ARRAY')) {
  //     // starts the task in the background
  //     const bgSyncTask = yield fork(mergeSortSagasWorker);

  //     // wait for the user stop action
  //     yield take('SORTING_FINISH');
  //     // user clicked stop. cancel the background task
  //     // this will cause the forked bgSync task to jump into its finally block
  //     yield cancel(bgSyncTask);
  //   }
}

export function* mergeSortCancelWatcher() {
  yield takeEvery('SORTING_FINISH', cancelSorting);
}
