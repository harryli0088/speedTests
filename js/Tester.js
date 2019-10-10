function Tester(options = {}) {
  this.maxNum = options.maxNum || 10;
  this.maxIter = options.maxIter || 10;

  this.function1ConsoleString = options.function1ConsoleString || "";
  this.function2ConsoleString = options.function2ConsoleString || "";

  this.function1 = options.function1 || function() {};
  this.function2 = options.function2 || function() {};

  this.run = function() {
    let start;
    let time1 = 0;
    let time2 = 0;
    let outputString = `
    Run on my computer using Node ${process.version} with ${this.maxIter.toString()} iterations per test

    | # of elements | Str Concat Time | Array Join Time |\n| --- | --- | --- |
    `;
    for(let num=10; num <= this.maxNum; num=num*10) {
      outputString += "| " + num.toString() + " | ";

      time1 = 0;
      time2 = 0;

      for(let iter = 0; iter<this.maxIter; ++iter) {
        start = new Date();
        this.function1(num);
        time1 += new Date() - start;

        start = new Date();
        this.function1(num);
        time2 += new Date() - start;
      }

      time1 = time1 / this.maxIter;
      console.log("At ", num, " # of elements, average ", this.function1ConsoleString, " : ", time1);
      outputString += time1.toString() + " | ";

      time2 = time2 / this.maxIter;
      console.log("At ", num, " # of elements, average ", this.function2ConsoleString, " : ", time2);
      outputString += time2.toString() + " |\n"

    }
    console.log(outputString);
  }
}

module.exports = Tester;
