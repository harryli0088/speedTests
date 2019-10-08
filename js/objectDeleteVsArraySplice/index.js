let num = 100000;


let start = new Date();

let array = []; //initialize empty array
for(let i=0; i<num; ++i) {
  array.push({}); //push empty objects
}
console.log("Array done pushing", new Date() - start);
while(array.length > 0) {
  array.splice(0, 1); //splice out objects one at a time
}

console.log("Array pushing and splicing", new Date() - start);


start = new Date();

let obj = {}; //initialize empty object
for(let i=0; i<num; ++i) {
  obj[i] = {}; //add empty objects to object
}
console.log("Obj done setting", new Date() - start);
for(let field in obj) {
  delete obj[field]; //delete objects
}

console.log("Object field setting and deleting", new Date() - start);
