const Tester = require("../Tester.js");



function stringConcat(num) {
  let str = "";
  for(let i=0; i<num; ++i) {
    str += "test, ";
  }
  str.slice(0,str.length-2); //remove the last comma and space
}

function arrayJoin(num) {
  let arr = [];
  start = new Date();
  for(let i=0; i<num; ++i) {
    arr.push("test");
  }
  arr.join(", ");
}



const test = new Tester({
  maxNum: 10000000,
  maxIter: 10,
  function1ConsoleString: "string concatenation",
  function2ConsoleString: "array join",
  function1: stringConcat,
  function2: arrayJoin
});

test.run();
