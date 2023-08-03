---
title: 'JavaScript Arrays'
description: 'JS methods reduce, map, filter, slice and other array methods'
pubDate: 'feb 02 2023'
# heroImage: '/placeholder-hero.jpg'
---

Arrays are structured data set of sequence of values, separated by commas, enclosed by square brackets ```const ns = [1,2,3];```.

# Basics.
```js
> const ns = [1,2,3];
> ns.length; // result => 3
> [].length; // result => 0
```
Array elements start at index 0.
```js
> ns[0]; // result: 1
> const langs = ['js', 'c', 'golis', 'lisp'];
> langs[2] // result => 'golis'
```
Try to access element not in the array results undefined.
```js
> langs[4] // result => undefined
```

JavaScript arrays can contain all primitive data types numbers, strings, two-dimensional arrays and objects.
```js
>  const arr = [{name: 'arrays'}, ['base', 0], ['libax']]
>  arr[1][1] // result => 0
> const path = [[1,2], [3], [4,5]];
> const line = path[2];
> line[1] // result => 5
```

We can add data type end of an array with ```.push(new_item).```
```js
> const arr = [1,2];
> arr.push(3);
> arr // => result [1,2,3];
```
We can also remove data type from end of an array with ```.pop()```
```js
> arr.pop();
> arr // => result [1,2];
```
If array is empty ```.pop()``` returns undefined.

Both methods ```mutate``` data structure.
```js
> const nums = ['one', 'two', 'three'];
> nums.pop();
> nums // result => ['one', 'two'];
> nums.push('ten');
> nums //result => ['one', 'two', 'ten'];
```
```.slice()``` method allows copying another array elements or portion of the elements ```.slice(start, stop)```.
```js
> const original = [10,20,30,40,50];
> const copy = original.slice();
> copy // result => [10,20,30,40,50];
> copy.slice(1);
> // result => [20,30,40,50];
> copy.slice(2,4);
> // result => [30,40];
```

A regular for ... of loop returns each element one by one.
```js
> const ns = [10,20,30];
> let total = 0;
> for (const n of ns) {
    total += n;
}
> // result => total = 60
```
```.forEach method``` also does similar thing. Each element is called one by one
passing to callback function. `callback function is n => {...}.`
```js
> const ns = [10,20,30];
> let sum = 0;
> ns.forEach(n => {
    sum = sum + n;
})
> // result => sum = 60;
```
```js
> const langs = [
    {name: 'JavaScript'},
    {name: 'C'},
    {name: 'LISP'}
];

> const database = [];
> langs.forEach((lang) => {
    database.push(lang.name);
});
> database; // => ['JavaScript', 'C', 'LISP']
```
The forEach callback function can also passed to `index element`.
```js
> const langs = ['C', 'JavaScript', 'Scheme', 'Golis', 'Coq'];

> langs.forEach((elem, index) => {
  console.log(`value: ${elem}, index: ${index}`);
});
> // value: C, index: 0
> // value: JavaScript, index: 1
> // value: Scheme, index: 2
> // value: Golis, index: 3
> // value: Coq, index: 4
```
`forEach` is different from   `for & for of ` loops, the latter two don't have callback function.
```js
```
```Slice with negative arguments```, if we pass a negative index to `.slice`
it means give me from the end of the array. For example, -1 means  ```return to me the last element of the array```. Similar to `array[array.length-1]`.
```js
> const ints = [100,200,300];
> ints.slice(-2); // result => [200,300];
```
`.map()` method builds new array give an callback calls each element in the array.
```js
> const square = [1,2,3];
> square.map(n => n * 2); // => [2, 4, 6]
```
`.map()` can be used to lowercase or uppercase strings.
```js
> const str = ['C', 'JS', 'GO'];
> str.map(char => char.toLowerCase()); // => [c, js, go]
```
`.map()` single operation to create new array elements.
```js
> const users = [
    {name: 'insaf'},
    {name: 'react'},
];
> const whoIsUsers = users.map(user => user.name);
> whoIsUsers // => [insaf, react];
```
Just like a regular JS function without return value, you got `undefined`.
```js
> [10,20].map(n => {
    n * 2;
});
// result => [undefined, undefined];
```
However, we can use arrow-function without the curly braces returning automatic values. 
```js
> [10,20,30].map(n => n*2) // result => [100,400,600];
```
`.map()` method is easy to read, it doesn't mutate original array.
```js
```
`.join()` joins two strings or more into a single string.
```js
> ['to', 'Upper', 'Case'].join(''); // => result toUpperCase
```
`.join()` takes one parameter: called the `separator`. It is to put between each element. Without the `separator` the strings are joined with `,` by default.
```js
> ['father', 'son'].join() // result => father,son
> ['father', 'son'].join('AND') // result => fatherANDson
```

`.includes()` method checks whether array contains given element.
```js
> ['i', 'j', 'k'].includes('j'); // result => true
> ['x', 'y', 'z'].includes('n'); // result => false
> function uniq(nums) {
    const arrnew = [];
    nums.forEach((num) => {
        if (!arrnew.includes(num)) {
            arrnew.push(num);
        }
    })
    return arrnew;
}
> uniq([1,2,3]) // result => [1,2,3];
> uniq(['i','i','j']) // result => [i,j];
```
