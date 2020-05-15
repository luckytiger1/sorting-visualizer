export function getMergeSortAnimations(array: any) {
  const animations: any = [];
  // console.log(array);

  if (array.length <= 1) return array;
  const auxiliaryArray = new Array(array.length);
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  // console.log(animations);
  // console.log(array);

  return animations;
}

function mergeSortHelper(
  mainArray: any,
  startIdx: any,
  endIdx: any,
  auxiliaryArray: any,
  animations: any,
) {
  if (startIdx >= endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(mainArray, startIdx, middleIdx, auxiliaryArray, animations);
  mergeSortHelper(mainArray, middleIdx + 1, endIdx, auxiliaryArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray: any,
  startIdx: any,
  middleIdx: any,
  endIdx: any,
  auxiliaryArray: any,
  animations: any,
) {
  // let k = startIdx;
  // let i = startIdx;
  // let j = middleIdx + 1;
  // while (i <= middleIdx && j <= endIdx) {
  //   // These are the values that we're comparing; we push them once
  //   // to change their color.
  //   animations.push([i, j]);
  //   // These are the values that we're comparing; we push them a second
  //   // time to revert their color.
  //   animations.push([i, j]);
  //   if (auxiliaryArray[i] <= auxiliaryArray[j]) {
  //     // We overwrite the value at index k in the original array with the
  //     // value at index i in the auxiliary array.
  //     animations.push([k, auxiliaryArray[i]]);
  //     mainArray[k++] = auxiliaryArray[i++];
  //   } else {
  //     // We overwrite the value at index k in the original array with the
  //     // value at index j in the auxiliary array.
  //     animations.push([k, auxiliaryArray[j]]);
  //     mainArray[k++] = auxiliaryArray[j++];
  //   }
  // }
  // while (i <= middleIdx) {
  //   // These are the values that we're comparing; we push them once
  //   // to change their color.
  //   animations.push([i, i]);
  //   // These are the values that we're comparing; we push them a second
  //   // time to revert their color.
  //   animations.push([i, i]);
  //   // We overwrite the value at index k in the original array with the
  //   // value at index i in the auxiliary array.
  //   animations.push([k, auxiliaryArray[i]]);
  //   mainArray[k++] = auxiliaryArray[i++];
  // }
  // while (j <= endIdx) {
  //   // These are the values that we're comparing; we push them once
  //   // to change their color.
  //   animations.push([j, j]);
  //   // These are the values that we're comparing; we push them a second
  //   // time to revert their color.
  //   animations.push([j, j]);
  //   // We overwrite the value at index k in the original array with the
  //   // value at index j in the auxiliary array.
  //   animations.push([k, auxiliaryArray[j]]);
  //   mainArray[k++] = auxiliaryArray[j++];
  // }
  let i, k, j;
  i = 0;
  j = startIdx;

  while (j <= middleIdx) {
    // animations.push([j, auxiliaryArray[i]]);
    // animations.push([j, auxiliaryArray[i]]);
    auxiliaryArray[i++] = mainArray[j++];
  }
  i = 0;
  k = startIdx;

  while (k < j && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= mainArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, mainArray[j]]);
      mainArray[k++] = mainArray[j++];
    }
  }
  while (k < j) {
    animations.push([k, k]);
    animations.push([k, k]);
    // animations.push([j, j]);
    // animations.push([j, j]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
}
