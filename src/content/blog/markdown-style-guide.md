---
title: 'Algorithms'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
pubDate: 'may 15 2023'
# heroImage: '/placeholder-hero.jpg'
---
CLRS text defines algorithm as a "any well-defined computational procedure that takes some value, or set of values, as input and produces some value, or set of values,
as output in a finite amount of time". 

# Data structures
A DS "is a way to store and organize data in order to facilitate access and modifications" (CLRS text).

Problem: Given an integer `Array` find the maximum number? (assume answer is present).

`Array` is a linear data structure that stores multiple elements in a single variable.

Solution: 
1. Take integer array as input.
2. Set the first array value as current maximum number.
3. Set i = 0 while less than array length.
4. Check if there is new maximum value number, if (yes) this becomes the new current maximum.
5. repeat step 4 until maximum value is found.

```js
> function findMax(ns) {
    let currMax = ns[0];
    for (let i=0; i<ns.length; i++) {
        if (ns[i] > currMax) {
            currMax = ns[i];
        }
    }
    return currMax;
}
> findMax([1,5,9,18,12]); // 18
```
As we menitioned algorithm is set of steps used to solve computation problem.
In our program we used C-style for loop that repeats a block of code until the 
specific condiiton is met.

