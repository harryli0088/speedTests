const Tester = require("../Tester.js");



function arraySplice(num) {
  let array = []; //initialize empty array
  for(let i=0; i<num; ++i) {
    array.push({}); //push empty objects
  }
  while(array.length > 0) {
    array.splice(0, 1); //splice out objects one at a time
  }
}

function objectDelete(num) {
  let obj = {}; //initialize empty object
  for(let i=0; i<num; ++i) {
    obj[i] = {}; //add empty objects to object
  }
  for(let field in obj) {
    delete obj[field]; //delete objects
  }
}



const test = new Tester({
  maxNum: 1000000,
  maxIter: 10,
  function1: {
    run: arraySplice,
    heading: "Array Splice"
  },
  function2: {
    heading: "Object Delete",
    run: objectDelete
  }
});

test.run();
