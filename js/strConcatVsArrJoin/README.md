# String Concatenation Vs Array Join

Is it faster to concatenate a string, for example using the += operator, or to push the strings into an array then join them?

## Results
Run on my computer using Node v10.15.3 with 10 iterations per test

| # of elements | Str Concat Time | Array Join Time |
| --- | --- | --- |
| 10 | 0 | 0.1 |
| 100 | 0.3 | 0.1 |
| 1000 | 0.2 | 1.6 |
| 10000 | 1.1 | 3.1 |
| 100000 | 15.9 | 29.3 |
| 1000000 | 546.2 | 351.4 |
| 10000000 | 6748.5 | 2946.8 |

String concatenation generally starts off faster, but array joining becomes faster between 100,000 and 1,000,000 elements.
