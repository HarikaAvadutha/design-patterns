// Without implementing DRY Pattern
function Rectangle(l, b) {
  let area = l * b;
  let perimeter = 2 * (l + b);
  console.log('Area:', area);
  console.log('Perimeter:', perimeter);
}

function Square(s) {
  let area = s * s;
  let perimeter = 4 * s;
  console.log('Area:', area);
  console.log('Perimeter:', perimeter);
}

function Circle(r) {
  const PI = 3.14;
  let area = PI * r * r;
  let perimeter = 2 * PI * r;
  console.log('Area:', area);
  console.log('Perimeter:', perimeter);
}

// With Implementing DRY Pattern
function Rectangle(l, b) {
  let area = l * b;
  let perimeter = 2 * (l + b);
  printResult(area, perimeter);
}

function Square(s) {
  let area = s * s;
  let perimeter = 4 * s;
  printResult(area, perimeter);
}

function Circle(r) {
  const PI = 3.14;
  let area = PI * r * r;
  let perimeter = 2 * PI * r;
  printResult(area, perimeter);
}

function printResult(area, perimeter) {
  console.log('Area:', area);
  console.log('Perimeter:', perimeter);
}
