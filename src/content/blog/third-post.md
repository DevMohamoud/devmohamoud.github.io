---
title: 'JavaScript Concurrency'
description: 'Promises, callbacks, async/await & event loops.'
pubDate: 'jul 9 2023'
# heroImage: '/placeholder-hero.jpg'
---

# setTimeout
The difference between synchronous vs asynchronous programming.
JavaScript's `map` method is synchronous runs sequentially.
It takes callback function traverses over each element and returns
a new array. 
```js
> [1,2,3].map(n => n*2); // [2, 4, 6]
> [1,2,3].map(n => n+2); // [3,4,5]
```
`map` method is synchronous because it always operates elements in ascending order (left to right).

Asynchronous code is different from synchronous because it doesn't processes elements from left to right or run at once. Instead, asynchronous code runs
multiple programs at the same time and schedules some of them to run in the future.
```js
> console.log('data');
> setTimeout(() => console.log('structures'), 1500);
```
How do this above program example runs:
1. The first `console.log` runs and displays `data.`
2. setTimeout schedules a timer callback after 1500 ms have passed.
3. When timer reaches scheduled time. The callback is called and displays `structures.`
4. When both line of program execute, program ends.

The next example array `nums` is appended to three numbers before calling `setTimeout.` 
```js
> const nums = [];
> nums.push(1);
> setTimeout(() => nums.push(2), 2000);
> nums.push(3);
> nums; // [1, 3, 2]
```
All the examples above are the basics of callback-based async programming.

# wrap setTimeout in a function & class.
```js
> function funcAsync() {
    const nums = [];
    setTimeout(() => nums.push('Asynchronous at work!'), 2000);
    return nums;
}
> const ns = funcAsync();
> ns // ['Asynchronous at work!']
```
Asynchronously collected.
```js
> const langs = [
    {name: 'javascript'},
    {name: 'forth'},
]
> function addLangsName(names, lang) {
    return names.push(lang.name);
}
> function asyncLang() {
    const database = [];
    for (const lang of langs) {
        setTimeout(() => addLangsName(database, lang), 1500);
    }
    return database;
}
> const data = asyncLang();
> data // ['javascript', 'forth']
```
Async timers with the shorter ms will always run first.
```js
> setTimeout(() => console.log('first'), 2000);
> setTimeout(() => console.log('second'), 1500);
> setTimeout(() => console.log('last'), 1000);
> 'last', 'second', 'first'
```
# clearTimeout 
clearTimeout cancels a scheduled timer that was created with `setTimeout`.
```js
> const database = [];
> const timer = setTimeout(() => database.push('tictoc'), 1500);
> clearTimeout(timer); []
```
```js
> const db = [];
> const timer1 = setTimeout(() => db.push('timer 1 ran'), 1500);
> const timer2 = setTimeout(() => db.push('timer 2 ran'), 1500);
> clearTimeout(timer1);
> db; ['timer 2 ran']
```
A delay of 0 can be given to `setTimeout` but still all other synchronous code will run befor async.
```js
> console.log('first');
> setTimeout(() => console.log('middle'), 1500);
> console.log('last');
> 'first', 'last', 'middle'
```
