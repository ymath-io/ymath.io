---
index: 3.2
title: Taylor Series
type: lesson

---

In [Differential Calculus](/learn/calculus/differential), we learned that the derivative of a function describes its behavior at a specific point.

We can use this information to construct a line tangent to the function. These tangent lines are often a good approximation for values close to the tangent point as well.

But often, a line isn't a great representation of a function. Especially when the function isn't a line. The problem is, lines are always straight. They can tell us what direction a function is traveling in that moment, but it can't tell us where the function  had lunch today, its general mood, and where it plans to have dinner tonight.

We can't achieve this with a straight line. But, what if we tried a curved line? Taking it up a degree from the line, let's see what we can do with a quadratic.

As an example, we'll try to find a "tangent" quadratic to the  function $f(x) = \sin(x).$

## Using Derivatives to Mimic Behavior

Let's say we have a function $f(x)$, and we want to construct a tangent line at $x=a$.

### Why do lines work?
When we construct a line tangent to a function, we measure the slope (derivative) of the function at the tangent point, and assign that value to the slope of the line. In this way, the line and the function have the same first derivative at $x=a$.
### Taking it a slope further
The second derivative of every line is 0, unlike most functions you'll want to mimic. But, with a quadratic equation, we can control the second derivative.

Let's find a quadratic $g(x)$ tangent to $f(x)$ at $x=a$.
As opposed to the line, where we had two requirements, we now have three!
They are: 
$$f(a)=g(a)$$ $$f'(a)=g'(a)$$ $$f''(a)=g''(a).$$

Take a moment to think about this yourself.

---


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY1OTM0MjIyNywtMTg3NDQ4OTg1NCw3Mz
QzMjczNDksLTEwMjc2Njg1OSwtMjQ1NjI2MTAwLC0xNzA4MjQw
MDM5LDQ4Nzg1OTkxOSwzNjY4MzIwNzQsNjg3OTQ2ODk4LDE4Mj
k5OTUwMSwxODEyNDYwMDM1LC0xMTg2ODE5NTEzLC0xNzEzNzQw
NTYxLC0xMTc5NjQ5NzM3LC0yNzI3ODQ4OTQsMTE3ODg1ODIxLC
05OTU2OTI5NzMsLTExNzQxMDA2MzVdfQ==
-->