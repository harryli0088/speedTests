const number = 1000000;

//initialize array to be used
let array = [];
let sum = 0;
for(let i=0; i<number; ++i) {
  let rand = Math.floor( Math.random()*10 ) + 1; //generate a random number 1 - 10
  array.push({index: i, count: rand}); //push object into array
  sum += rand; //sum the random numbers generated
}
console.log("Array length: ",array.length,"; Sum: ", sum);



let arr = JSON.parse(JSON.stringify(array)); //copy the array before starting the time
let i = 0;
let start = new Date();
//while there are still elements to be chosen
while(i < sum) {
  let randIndex = Math.floor( Math.random()*arr.length ); //get random element in array
  arr[randIndex].count--; //decrement the number of times this element has been randomly chosen
  //if this element is finished being chosen
  if(arr[randIndex].count <= 0) {
    arr.splice(randIndex, 1); //remove element from array entirely
  }

  i++;
}

console.log("Splicing finished elements out of array: ", new Date() - start);




arr = JSON.parse(JSON.stringify(array)); //copy the array before starting the time
i = 0;
start = new Date();
//while there are still elements to be chosen
while(i < sum) {
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

console.log("Skipping over to the next available element: ", new Date() - start);
