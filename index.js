function findMinAndRemove(array) {
  let min
  let index
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      min = array[i]
    } else {
      if (array[i] < min) {
        min = array[i]
        index = i
      }
    }
  }
  array.splice(index, 1)
  return min
}

function insertionSort(array) {
  let sortedArray = []
  while (array.length !== 0) {
    sortedArray.push(findMinAndRemove(array))
  }
  return sortedArray
}
