export const merge = async (arr1: any, arr2: any) => {
  let sorted = [];
  while (arr1.length && arr2.length) {
    await sleep(10);
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    else sorted.push(arr2.shift());
  }

  return sorted.concat(arr1.slice().concat(arr2.slice()));
};

const sleep = (ms: number) => {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
};
// const speed = 570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;
export const mergeSort = async (arr: number[]) => {
  if (arr.length <= 1) return arr;
  // await sleep(interpolateSpeed('50'));
  const mid = Math.floor(arr.length / 2),
    left: any = await mergeSort(arr.slice(0, mid)),
    right: any = await mergeSort(arr.slice(mid));
  return await merge(left, right);
};
