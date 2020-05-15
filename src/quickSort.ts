export const quickSort = (arr: number[]) => {
  quickSortHelper(arr, 0, arr.length - 1);
};

const quickSortHelper = (arr: number[], start: number, end: number) => {
  if (start >= end) return;
  const j = partition(arr, start, end);

  quickSortHelper(arr, start, j - 1);
  quickSortHelper(arr, j + 1, end);
};

const swap = (arr: number[], a: number, b: number) => {
  let swap = arr[a];
  arr[a] = arr[b];
  arr[b] = swap;
};

const partition = (arr: number[], start: number, end: number): number => {
  let i = start;
  let j = end;
  let pivot = Math.floor((start + end) / 2);

  while (true) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j++;

    if (i >= j) return j;
    swap(arr, i, j);
  }
};

// quickSort([3, 4, 6, 1, 2, 4, 7, 12]);

console.log(quickSort([3, 4, 6, 1, 2, 4, 7, 12]));
