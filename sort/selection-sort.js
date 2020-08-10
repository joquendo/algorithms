const selectSort = (arr) => {

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    let temp;

    for (let j = i + 1; j < arr.length; j++) {
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
