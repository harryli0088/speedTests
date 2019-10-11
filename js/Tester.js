function Tester(options = {}) {
  this.maxNum = options.maxNum || 10;
  this.maxIter = options.maxIter || 10;

  this.preFunction = options.preFunction || function() {};
    this.functions = options.functions || []; //each function should be an object with the structure {run: functino, heading: string}

    this.run = function() {
      let start;
      let time = 0;
      let tableString = `
      Run on my computer using Node ${process.version} with ${this.maxIter.toString()} iterations per test

      | # of elements | ${this.functions.map(f => f.heading).join(" | ")} |\n| --- | --- | --- |
      `; //initialize README table

      //run functions on several numbers of elements
      for(let num=10; num <= this.maxNum; num=num*10) {
        tableString += "| " + num.toString() + " | ";

        let preFunctionReturn = this.preFunction(num) || {}; //for this num, run preFunction

        //run all functions
        for(let functionIndex=0; functionIndex<this.functions.length; ++functionIndex) {
          time = 0;
          for(let iter = 0; iter<this.maxIter; ++iter) {
            start = new Date();
            this.functions[functionIndex].run(num, JSON.parse(JSON.stringify(preFunctionReturn)) ); //run function with num and JSON-copied preFunctionReturn
            time += new Date() - start; //sum times taken
          }

          time = time / this.maxIter; //get average of time taken
          console.log("At ", num, " # of elements, average ", this.functions[functionIndex].heading, " : ", time);
          tableString += time.toString() + " | "; //add average to table

        }

        tableString += "\n"; //add new table row
      }
      console.log(tableString); //console table
    }
  }

  module.exports = Tester;
