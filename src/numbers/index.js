const isEven = (num) => {
  // write code for numbers.isEven
if(num % 2 === 0){
  return true
} else {
  return false
}
}

const sum = (arr) => {
  // write code for numbers.sum
  const theSum = arr.reduce((accum, currentValue) => accum + currentValue);
  return theSum;

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let theArray = arr.reduce((accum, currentValue) => accum + currentValue);
  if (theArray === sum) {
    return true;
  } else {
    return false;
  }


}

module.exports = {
  isEven,
  sum,
  comboSum
}