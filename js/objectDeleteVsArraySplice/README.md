# Object vs Array
This tests the speed of removing an element from an object with the delete command vs from an array by splicing




## Results
These are the results on my computer with 100,000 elements using Node v10.15.3:


    Array done pushing 21

    Array pushing and splicing 51959

    Object done setting 23

    Object field setting and deleting 39


It seems that pushing elements into an array and setting fields in an object are comparable in speed, but splicing elements out of an array is **very** costly.

It seems that if you need to constantly remove elements, an object is the better choice.
