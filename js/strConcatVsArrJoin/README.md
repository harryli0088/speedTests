# String Concatenation Vs Array Join

Is it faster to concatenate a string, for example using the += operator, or to push the strings into an array then join them?

## Results
Run on my computer using Node v10.15.3 with 10 iterations per test

| # of elements | String Concatenation | Array Join |
| --- | --- | --- |
| 10 | 0 | 0 |
| 100 | 0.2 | 0 |
| 1000 | 0.1 | 0.3 |
| 10000 | 0.3 | 0.7 |
| 100000 | 3.7 | 6.9 |
| 1000000 | 122.9 | 86.8 |
| 10000000 | 1955.8 | 850.1 |

String concatenation generally starts off faster, but array joining becomes faster between 100,000 and 1,000,000 elements.
