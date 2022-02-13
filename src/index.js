
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = []
    for(el in matrix) {
      if(el === 0 || el % 2 == 0) {
        result = result.concat(matrix[el])
      } else {
        result =result.concat(matrix[el].reverse())
      }
    }
    return result
}
