selectionSort = (arr) => {

  const arrayLength = arr.length;

  for (let i = 0; i < arrayLength - 1; i++) {
    let minIndex = i;
    let temp;

    for (let j = i + 1; j < arrayLength; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
  
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;

}
