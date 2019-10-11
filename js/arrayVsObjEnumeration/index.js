const Tester = require("../Tester.js");



function arrayForLoop(num) {
  let array = [];
  for(let i=0; i<num; ++i) {
    array.push(i)
  }
  for(let i=0; i<array.length; ++i) {
    array[i] = 1;
  }
}

function arrayForEach(num) {
  let array = [];
  for(let i=0; i<num; ++i) {
    array.push(i)
  }
  array.forEach((e,i) => array[i] = 1);
}

function objectForIn(num) {
  let obj = {};
  for(let i=0; i<num; ++i) {
    obj[i] = i;
  }
  for(let key in obj) {
    obj[key] = 1;
  }
}

function objectForEach(num) {
  let obj = {};
  for(let i=0; i<num; ++i) {
    obj[i] = i;
  }
  Object.keys(obj).forEach(key => obj[key] = 1);
}


const test = new Tester({
  maxNum: 1000000,
  maxIter: 10,
  functions: [
    {
      run: arrayForLoop,
      heading: "Array for loop"
    },
    {
      run: arrayForEach,
      heading: "Array for each"
    },
    {
      run: objectForIn,
      heading: "Object for in"
    },
    {
      run: objectForEach,
      heading: "Object for each"
    },
  ]
});

test.run();
