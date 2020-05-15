import { mergeSort } from './mergeSort';

const randomDataSet = (
  dataSetSize: number,
  minValue: number,
  maxValue: number,
): Array<number> => {
  return new Array(dataSetSize).fill(0).map(() => {
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
  });
};

const updateArray = (num: any): any => {
  const randArr = randomDataSet(num, 10, 200);
  // console.log(mergeSort(randArr));

  return randArr;
};

const initialState: any = {
  arrayElements: randomDataSet(5, 10, 200),
  sorting: false,
};

const arrayListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'UPDATE_ARRAY_LIST':
      return {
        ...state,
        arrayElements: updateArray(action.payload + 4),
      };
    case 'SORTING_START':
      return {
        ...state,
        sorting: true,
      };
    case 'SORTING_FINISH':
      return {
        ...state,
        sorting: false,
      };
    default:
      return state;
  }
};

export default arrayListReducer;
