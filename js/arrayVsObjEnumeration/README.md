# Array Vs Object Enumeration
Is it faster to loop through an array and change values, or to loop through an object's fields?



## Results

Run on my computer using Node v10.15.3 with 10 iterations per test

| # of elements | Array for loop | Array for each | Object for in | Object for each |
| --- | --- | --- |
| 10 | 0 | 0 | 0.1 | 0.2 |
| 100 | 0 | 0 | 0 | 0 |
| 1000 | 0.3 | 0.1 | 0.2 | 0.3 |
| 10000 | 0.4 | 0 | 0.7 | 0.6 |
| 100000 | 4 | 3.9 | 28.1 | 25.2 |
| 1000000 | 57.3 | 49.5 | 241.9 | 226.8 |

It seems that enumerating through an array is much faster compared to an object, especially as the number of elements increases. I had thought that enumerating an array with a for loop was faster. I'm not sure if there are any cache or optimization things going on that improves time for subsequent tests. I will try to randomize the function order to see if that changes execution time.
