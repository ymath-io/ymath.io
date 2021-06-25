---
index: 3.2
title: Introduction to Taylor Series
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

In short, the higher degree erms are hindering the lower degree terms from serving their purpose.

We can solve this by setting up higher degree terms to cancel out when they are not needed. This is done by replacing
$$x \rightarrow x-a.$$

Since these two terms have the same derivative, this replacement won't disturb the parts of our naive solution that work.

So, we have
$$g(x)=f(a)+f'(a)(x-a) + \frac{1}{2}f''(a)(x-a)^2.$$

Let's try it out! With $f(x) = \cos x$ and $a=0$,  we have
<img class="graph" src="/img/graphs/cosx-taylor-2.png" />

This is definitely nicer than a line. Now that we've seen greatness, let's get greedy!

What should the next term  be to make this a cubic function?
At first glance, you might say
$$\frac{1}{3}f'''(a)(x-a)^3.$$
The purpose of that fractional coefficient is to make up for the scalar residue caused by differentiation. 
However, the problem here is that when this term comes into play, it will have been differentiated *thrice*,  and we need to cancel out not just a scalar of $3$, but $3!$. We didn't have to deal with this in the second  degree term, because $2!=2$. This factorial rule goes for any following terms.

So, a cubic would look like
$$g(x)=f(a)+f'(a)(x-a) + \frac{1}{2!}f''(a)(x-a)^2 + \frac{1}{3!}f'''(a)(x-a)^3.$$

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTUwODEzNzY4MSw5OTMyMDM5NzIsMzkyMD
U2MTU2LC0xOTMxMzA3MTI5LDE2NTkzNDIyMjcsLTE4NzQ0ODk4
NTQsNzM0MzI3MzQ5LC0xMDI3NjY4NTksLTI0NTYyNjEwMCwtMT
cwODI0MDAzOSw0ODc4NTk5MTksMzY2ODMyMDc0LDY4Nzk0Njg5
OCwxODI5OTk1MDEsMTgxMjQ2MDAzNSwtMTE4NjgxOTUxMywtMT
cxMzc0MDU2MSwtMTE3OTY0OTczNywtMjcyNzg0ODk0LDExNzg4
NTgyMV19
-->