function isSorted(arr) {
  let ascending = true;
  let descending = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      ascending = false;
    }
    if (arr[i] < arr[i + 1]) {
      descending = false;
    }
  }

  if (ascending) return "Ascending";
  if (descending) return "Descending";
  return "Not sorted";
}

console.log(isSorted([1, 3, 2, 4, 5]));
