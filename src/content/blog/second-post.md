---
title: 'Modern JavaScript'
description: 'All browsers supported JavaScript features'
pubDate: 'jun 18 2023'
# heroImage: '/placeholder-hero.jpg'
---
# Let
```let``` keyword declared with variables.
```js
> let ns = 10;
```
Variable `ns` can not be redeclared. This will cause an error.
```js
> let ns = 114;
> let ns = 20; // SyntaxError: Identifier ns has already been declared!
```
`let` scope is visible inside a block only.
```js
> function fun() {
    let word = 'backend';
    if (true) {
        let word = 'frontend'
    }
    return word;
}
> fun() // backend
```
`word` variable has two different values this is called `shadowing`. the inner `let word` shadows the outer `let word`.
<!-- ```js
``` -->
# Const

`const` keyword declared with a variable safeguards reassignment.
```fs
> function fun() {
    const n = 1;
    return n + 1;
}
> fun() //  2;

> function func() {
    const ns = 2;
    ns  = 5;
    return ns + 1;
}
> func() // TypeError: Assignment to constant variable.
```
`const` allows to mutate array content by using array method like `.push` but assigning new content to array will cause an error. For example,
```js
> const arr = [1,2];
> arr.push(3) arr[1,2,3];
> arr = [10,20]; SyntaxError: Identifier 'arr' has already been declared
hint: const keyword safeguards variable not the data.
```
<!-- ```js
``` -->
# Template literal
`Template literals.`
JavaScript has three syntaxes for strings. The single qoutes 'i' or double qoutes "j" and `backticks`.
The backtick string is called `template literals` use for string interpolation.
```js
> const name = 'Insaf';
> const state = "Seattle";
> const city = `Terminal`;
> `coder` === 'coder'; true 
```
`string interpolation.`
```js
> `5 * 5 = ${5 * 5}`;  '5 * 5 = 25'
> `${'open'.toUpperCase()}` 'OPEN'
```
We can interpolate many JavaScript expressions.
```js
> const square = 10;
> `2 + ${square} = ${square * 2}`;  '2 + 10 = 20'
```
<!-- ```js
```  -->
# Computed properties
Object keys can be unqouted words, like this 
```js
> const online = {libax: '2 minutes ago'}; 
> online.libax; '2 minutes ago'
```
Objects can be also created with `computed keys` by wrapping the key in square brackets. 
```js
> const state = 'Seattle';
> const state_zip = {[state]: 98};
> state_zip.State; 98 
```
The expression {[state]} is evaluated and its value is used as property name.
```js
> const lang = {
    name: 'javaScript',
    createdYear: 1995,
}
> function created(lang) {
    return {[lang.name]: lang.createdYear};
}
> created(lang); { javaScript: 1995};
```
```js
```
# NaN
`NaN` is short for `Not-A-Number` but its global property is `Number`. However,
any operation on a NaN also returns NaN.
```js
> NaN == NaN || NaN === NaN; false
```
We can use standard built-in function `isNaN` function that checks wether a value is a NaN.
```js
> isNaN(NaN); true
> isNaN(1); false
> isNaN('i'); true
```
There is also a newer version `Number.isNaN` that is more reliable alternative.
```js
> Number.isNaN(NaN); true
> Number.isNaN(1); false
```
<!-- ```js
``` -->
# Shorthand properties
Object keys are obtained refering to the same variable name. for example,
```js
> const name = 'javascript',
> const paradigm = 'functional',
> const lang = {
    name: name,
    paradigm: paradigm,
};
> [lang.name, lang.paradigm];
 ['javascript', 'functional']
```

In Modern JavaScript `shorthand properties` allow shorten format and the flexibility to add more properties the above code.
```js
> const name = 'javascript',
> const paradigm = 'functional',
> const lang = {name, paradigm};
> [lang.name, lang.paradigm];
 ['javascript', 'functional']
```

# Accessors in object literals
Object literals are commonly used data structures in JavaScript.
```js
> const obj = {
    name: 'Using props to pass data',
    exercises: 12,
};
> obj.exercises; 
> 12
```
Object literals can also hold a `function`, `get` keyword and `set` keyword as a property, like `obj.lang()`.
```js
> const obj = {
    getLang: function() { return 'Markdown ' + 2023; }
};
> obj.getLang();
> 'Markdown 2023'
```
With getters the function is automatically called.
```js
> const lang = {
    get frame() { return 'Reactjs';}
};
> lang.get;
> 'Reactjs'
```
```js
> const lang = {
    get frame() { return 'Reactjs ' + 2013;}
};
> lang.frame;
> 'Reactjs 2013'
```
```js
> let name = 'ruwayda';
> const staff = {
    get staffName() { return name;}
};
> const staffName1 = staff.staffName;
> name = 'Libax';
> const staffName2 = staff.staffName;
> [staffName1, staffName2];
> ['ruwadya', 'libax']
```
As for the setter property it has one value written to the property.
```js
> const frontend = {
    framework: 'React',
    set frontendFramework(frame) { this.framework = frame; }
};
> frontend.framework; // 'React'
> frontend.frontendFramework = 'Qwik'
> frontend.framework; // 'Qwik'
```
```js
> const DSL = {
    database: 'redis',
    set databaseName(new_db) {
        this.database = `new database: ${new_db}`;
    }
};
> DSL.database; // 'redis'
> DSL.databaseName = 'SQL'
> DSL.database; // 'new databse: SQL'
```
Both getter and setter together.
```js
> const lang = {
    currentLang: 'JavaScript',
    get langName() { return this.currentLang; },
    set addLangName(newLang) { this.currentLang = newLang; }
};
> lang.currentLang // 'JavaScript'
> lang.addLangName = 'FORTH';
> lang.currentLang // 'FORTH'
```


