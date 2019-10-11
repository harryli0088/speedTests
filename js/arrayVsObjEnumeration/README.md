# Array Vs Object Enumeration
Is it faster to loop through an array and change values, or to loop through an object's fields?



## Results

Run on my computer using Node v10.15.3 with 10 iterations per test

| # of elements | Array | Object |
| --- | --- | --- |
| 10 | 0.1 | 0 |
| 100 | 0.1 | 0 |
| 1000 | 0.1 | 0.4 |
| 10000 | 0 | 0.9 |
| 100000 | 2.3 | 22 |
| 1000000 | 29.9 | 241.4 |

It seems that enumerating through an array is much faster compared to an object, especially as the number of elements increases.
