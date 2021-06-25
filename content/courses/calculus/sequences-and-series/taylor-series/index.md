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

A naive  approach to this is
$$g(x) = f(a) + f'(a)(x-a) + \frac{1}{2}f''(a)x^2.$$ 
This only satisfies the third criteria.  If we take away the third term, it satisfies only the second criteria. If we take away the second term as well, it only satisfies the first criteria.


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5MzEzMDcxMjksMTY1OTM0MjIyNywtMT
g3NDQ4OTg1NCw3MzQzMjczNDksLTEwMjc2Njg1OSwtMjQ1NjI2
MTAwLC0xNzA4MjQwMDM5LDQ4Nzg1OTkxOSwzNjY4MzIwNzQsNj
g3OTQ2ODk4LDE4Mjk5OTUwMSwxODEyNDYwMDM1LC0xMTg2ODE5
NTEzLC0xNzEzNzQwNTYxLC0xMTc5NjQ5NzM3LC0yNzI3ODQ4OT
QsMTE3ODg1ODIxLC05OTU2OTI5NzMsLTExNzQxMDA2MzVdfQ==

-->