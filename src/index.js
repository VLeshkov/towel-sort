
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (!matrix) {
    return [];
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      let rowSorted = matrix[i].sort( (a, b) => {return a - b} );
      for (let elem of rowSorted) {
        result.push(elem);
      }
    } else {
      let rowSorted = matrix[i].sort( (a, b) => {return b - a} );
      for (let elem of rowSorted) {
        result.push(elem);
      }
    }
  }
  return result;
}

