export const MERGE_SORT_ARRAY_LIST = 'MERGE_SORT_ARRAY_LIST';

export const updateArrayList = (number: number) => ({
  type: 'UPDATE_ARRAY_LIST',
  payload: number,
});

export const mergeSortArrayList = (array: any) => ({
  type: MERGE_SORT_ARRAY_LIST,
  payload: array,
});

export const mergeSortArray = () => ({
  type: 'MERGE_SORT_ARRAY',
});

export const sortingStart = () => ({
  type: 'SORTING_START',
});
export const sortingFinish = () => ({
  type: 'SORTING_FINISH',
});
