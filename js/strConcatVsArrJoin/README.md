# String Concatenation Vs Array Join

Is it faster to concatenate a string, for example using the += operator, or to push the strings into an array then join them?

## Results
Run on my computer using Node v10.15.3 with 10 iterations per test

| # of elements | Str Concat Time | Array Join Time |
| --- | --- | --- |
| 10 | 0 | 0 |
| 100 | 0.3 | 0 |
| 1000 | 0.3 | 0.6 |
| 10000 | 0.7 | 0.4 |
| 100000 | 6 | 5.2 |
| 1000000 | 426.3 | 413.7 |
| 10000000 | 7852.6 | 7149.9 |

String concatenation starts off faster, but array joining becomes faster around 500000 elements.
