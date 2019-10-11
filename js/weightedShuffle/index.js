const Tester = require("../Tester.js");


function createArray(num) {
  //initialize array to be used
  let array = [];

  let sum = 0;
  for(let i=0; i<num; ++i) {
    let rand = Math.floor( Math.random()*10 ) + 1; //generate a random number 1 - 10
    array.push({index: i, count: rand}); //push object into array
    sum += rand; //sum the random numbers generated
  }

  return {array: array, sum: sum};
}

function arraySplice(num, preFunctionReturn) {
  let arr = JSON.parse(JSON.stringify(preFunctionReturn.array)); //copy the array before starting the time
  let i = 0;
  //while there are still elements to be chosen
  while(i < preFunctionReturn.sum) {
    let randIndex = Math.floor( Math.random()*arr.length ); //get random element in array
    arr[randIndex].count--; //decrement the number of times this element has been randomly chosen
    //if this element is finished being chosen
    if(arr[randIndex].count <= 0) {
      arr.splice(randIndex, 1); //remove element from array entirely
    }

    i++;
  }
}

function skipping(num, preFunctionReturn) {
  let arr = JSON.parse(JSON.stringify(preFunctionReturn.array)); //copy the array before starting the time
  i = 0;
  start = new Date();
  //while there are still elements to be chosen
  while(i < preFunctionReturn.sum) {
    let randIndex = Math.floor( Math.random()*arr.length ); //get random element in array

    //if this element is already done being chosen
    while(arr[randIndex].count < 1) {
      randIndex++; //move to the next element
      //wrap around to the beginning of the array if necessary
      if(randIndex >= arr.length) {
        randIndex = 0;
      }
    }

    arr[randIndex].count--; //decrement the number of times this element has been randomly chosen

    i++;
  }
}



const test = new Tester({
  maxNum: 1000000,
  maxIter: 10,
  preFunction: createArray,
  functions: [
    {
      run: arraySplice,
      heading: "Array splice"
    },
    {
      heading: "Skipping",
      run: skipping
    }
  ]
});

test.run();
