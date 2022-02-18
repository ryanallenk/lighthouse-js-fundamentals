function calculateRectangleArea(length, width) {
  if (length >= 0 && width >= 0)  
    return length * width;
}

function calculateTriangleArea(base, height) {
  if (base >= 0 && height >= 0) {
    return (base * height) / 2;
  }
}

function calculateCircleArea(radius) {
let num =  Math.pow(radius, 2);
  if (radius >= 0) {
    return Math.PI * num;
 }
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateTriangleArea(2, 2));  // should print 2
console.log(calculateCircleArea(10, 10));    // should print 314
console.log(calculateRectangleArea(10, -5));    // should print undefined
