function mergeArrays(leftArray, rightArray) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
            mergedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < leftArray.length) {
        mergedArray.push(leftArray[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArray.length) {
        mergedArray.push(rightArray[rightIndex]);
        rightIndex++;
    }

    return mergedArray;
}


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const midIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, midIndex);
    const rightArray = array.slice(midIndex);

    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);

    return mergeArrays(sortedLeftArray, sortedRightArray);
}
