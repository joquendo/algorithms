bubbleSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= i; j--) {
      if (arr[j-1] > arr[j]) { 
        const temp = arr[j]; 
        arr[j] = arr[j-1]; 
        arr[j-1] = temp;
      }
    }
  }
  return arr;
}
