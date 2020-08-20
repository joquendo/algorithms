const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let res  = [];
  let il = 0; // left index
  let ir = 0; // right index

  while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
          res.push(left[il++]);
      } else {
          res.push(right[ir++]);
      }
  }
  return res.concat(left.slice(il)).concat(right.slice(ir));
}
module.exports = {mergeSort};
