---
template: blog-post
title: Javascript trick with bitwise OR
slug: /javascript-tricks
date: 2021-07-20 14:26
description: Another new blog about front-end development :)
featuredImage: /assets/nathan-da-silva-xpkN1KEY8lM-unsplash.jpg
---

Hi, folks!

I was looking through different source code on github and saw a couple of interesting JavaScript tricks from the [nanoid repository](https://github.com/ai/nanoid):

```
let i = size;

while (i--) {
  id += urlAlphabet[(Math.random() * 64) | 0];
}

```

Let’s figure out how it works. So, here we go.

Look at the loop. In the code it is commented as follows:

> _"A compact alternative for `for (var i = 0; i < step; i++)`"_

Here the while-cycle's counter `i` is decremented by the decrement operator until it reaches zero, which ends the cycle, since _`0 === false`_.

Cool! Code looks more compact.

Let's keep going: bitwise OR (|) is coming up. Comment from the code is next:

> _" | 0 is more compact and faster than Math.floor()"_

Well, let's see.
Rounding to an integer in this code is necessary for the Math.random() function returns a float-type, pseudo-random number in the interval [0, 1] (With almost constant probability density) — which then you can scale the way you need.

The first thing that comes to mind for rounding up Math.random()’s result is Math.floor() function, which rounds the argument to the nearest integer number.

An example of how this function works and its description can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

But back to the bitwise operator OR (|), which returns a 1 in corresponding bit position, where the bits of one or two operands are equal to 1.

Let's slightly modify [this example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) and take a look at the result:

```
const a = 7.213545;
const b = 0;
console.log(a | b); // expected output: 7

```

Bitwise operation with a float-type number and zero operands returns an integer result.

Cool! We can replace the function with just one operation and it's work faster.  
Using such kind of tricks, you can optimise your application a little bit.

"Devil is always in the details" :)

Thanks for reading this!
