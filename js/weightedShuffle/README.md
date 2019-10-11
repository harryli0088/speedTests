# Weighted Shuffle
This tests the speed of randomly shuffling an array of weighted elements.

In this context, different elements in the starting array have different positive, integer weights. Each element will appear in the outcome array the number of times corresponding to its weight. Ex: if an element's weight is 5, it will appear 5 times in the outcome array.

In this test, we randomly choose elements from the starting array. Each time an element is chosen, it's count is decremented. When an element's count reaches 0, it's done being selected. This tests the speed of splicing the finished element out of the array vs simply skipping over it and moving to the next available element. Note that this test does not test the speed of pushing the chosen elements into an outcome array.


## Results


## Inspiration
I thought of this idea from shuffling music. I want to listen to some songs often, while others I only want to listen to occasionally. What if there were a weighting system to the shuffle? For example, every time I finish listening to a song, it's weight is increased. Whereas if I skip a song, it's weight could be decreased proportionally to the time left. If such a system were implemented, assuming the weights are already calculated, what would be a quick way to shuffle the songs, so that the heavily weighed songs appear many times in the shuffle, while the lightly weighed songs only appear occasionally?
