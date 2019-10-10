function Tester(options = {}) {
  this.maxNum = options.maxNum || 10;
  this.maxIter = options.maxIter || 10;

  this.preFunction = options.preFunction || function() {};
  this.function1 = {
      run: options.function1.run || function() {},
      consoleString: options.function1.consoleString || "",
      heading: options.function1.heading || "",
  }
  this.function2 = {
      run: options.function2.run || function() {},
      consoleString: options.function2.consoleString || "",
      heading: options.function2.heading || "",
  }

  this.run = function() {
    let start;
    let time1 = 0;
    let time2 = 0;
    let outputString = `
    Run on my computer using Node ${process.version} with ${this.maxIter.toString()} iterations per test

    | # of elements | ${this.function1.heading} | ${this.function2.heading} |\n| --- | --- | --- |
    `;
    for(let num=10; num <= this.maxNum; num=num*10) {
      outputString += "| " + num.toString() + " | ";

      time1 = 0;
      time2 = 0;

      for(let iter = 0; iter<this.maxIter; ++iter) {
        let preFunctionReturn = this.preFunction(num);

        start = new Date();
        this.function1.run(num, preFunctionReturn);
        time1 += new Date() - start;

        start = new Date();
        this.function2.run(num, preFunctionReturn);
        time2 += new Date() - start;
      }

      time1 = time1 / this.maxIter;
      console.log("At ", num, " # of elements, average ", this.function1.heading, " : ", time1);
      outputString += time1.toString() + " | ";

      time2 = time2 / this.maxIter;
      console.log("At ", num, " # of elements, average ", this.function2.heading, " : ", time2);
      outputString += time2.toString() + " |\n"

    }
    console.log(outputString);
  }
}

module.exports = Tester;
