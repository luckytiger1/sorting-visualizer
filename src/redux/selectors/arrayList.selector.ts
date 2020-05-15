import { createSelector } from 'reselect';

const selectArrayList = (state: any) => state.arrayList;

export const selectArray = createSelector(
  [selectArrayList],
  (arrayList) => arrayList.arrayElements,
);
export const selectSorting = createSelector(
  [selectArrayList],
  (arrayList) => arrayList.sorting,
);
