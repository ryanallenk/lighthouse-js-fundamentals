function range(start, end, step){
  const result = []
  if (start > end || step < 0 || start === undefined || end === undefined || step === undefined) {
    return result
  }
  result.push(start);
  while (start < end - 1) {
    
    start += step;
    result.push(start);
  }
  return result;
}
console.log(range(0, 10, 2)); // output should be [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5)); // output should be [ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3)); // output should be  [ -5, -2, 1 ]
console.log(range(0, 10, -5)); // output should be []