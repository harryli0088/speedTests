const Tester = require("../Tester.js");



function array(num) {
  let array = [];
  for(let i=0; i<num; ++i) {
    array.push(i)
  }
  for(let i=0; i<array.length; ++i) {
    array[i] = 1;
  }
}

function object(num) {
  let obj = {};
  for(let i=0; i<num; ++i) {
    obj[i] = i;
  }
  for(let key in obj) {
    obj[key] = 1;
  }
}



const test = new Tester({
  maxNum: 1000000,
  maxIter: 10,
  functions: [
    {
      run: array,
      heading: "Array"
    },
    {
      heading: "Object",
      run: object
    }
  ]
});

test.run();
