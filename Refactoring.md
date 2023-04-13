# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I edited the original `deterministicPartitionKey` function into a new function called `getPartitionKey`, which is simpler and more modular. The new `getPartitionKey` function takes an `event` object as input and returns a partition key for the event.

First, I set the default partition key to `"0"`. Then, if the `event` object has a `partitionKey` property, I use that value as the partition key. If not, I use the `stringify` function to serialize the `event` object and generate a SHA3-512 hash of the resulting string using the `getHash` function.

If the resulting partition key exceeds the maximum length of 256 characters, the function generates another SHA3-512 hash of the partition key until it is under the maximum length. Finally, I return the partition key.

The benefits of my edits are:

-   Better modularity: I refactored the code into smaller functions that each have a single responsibility, making the code easier to read, understand, and maintain.
    
-   Improved readability: I simplified the code and removed unnecessary conditions and repetitive logic, making it more readable.
    
-   Easier testing: Because the `getPartitionKey` function is simpler and more modular, it is easier to write unit tests for each component function, making it easier to test the overall behavior of the function.
    

Overall, the edited code is better because it is more **modular, more readable, and easier to test.**
