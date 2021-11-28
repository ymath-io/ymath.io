---
index: 8
title: Divisibility
type: lesson 

---

So, you're writing your math program again, and you want to say that any
amount $y$ of apples can be roughly distrubuted amongst $x$ baskets. You
go on to say that at least one basket will have 

$$\frac{y}{x}$$

apples,
annd this generally seems to hold! Except, it only works when 
$$x\mid y.$$

 Dang! How are you supposed to battle with that? How do we even
figure out if an arbritary number divides another?  

Here's one way.

Whenever $x\mid y,$ we will have that $\frac{y}{x}$ is an integer. We
could simply compute that, and if it is an integer, then bingo! But, our
function does not know how to test for an integer. So, we'll explicitly
have to output $0$ or $1.$

There's a nice way we can get   $0:$

$$x\ \mid\ y =
\frac{y}{x}-\left\lfloor\frac{y}{x}\right\rfloor\Rightarrow\left\{\text{true}:
0,\ \text{false}:\ \left(0< ?<1\right)\right\}$$

Right now, when it's false, we get whatever the residue of the floor
is.  That isn't very pretty - we'd ideally output the same thing every
time it's false.  We can do this easily with a ceiling function, but
we'd much rather use a floor function since we've already used it once.

$$x\ \mid\ y\ =
\frac{y}{x}-\left\lfloor\frac{y}{x}\right\rfloor-1\Rightarrow\left\{\text{true}:
-1,\ \text{false}:\ \left(-1<?<0\right)\right\}$$

$$x\ \mid\ y\ =
-\left(\frac{y}{x}-\left\lfloor\frac{y}{x}\right\rfloor-1\right)\Rightarrow\left\{\text{true}:
1, \text{false}: \left(1>?>0\right)\right\}$$

$$x\ \mid\ y\ =\left
\lfloor-\left(\frac{y}{x}-\left\lfloor\frac{y}{x}\right\rfloor-1\right)\right\rfloor\Rightarrow\left\{\text{true}:
1,\ \text{false}: 0\right\}$$

$$x\ \mid\ y\ =\left
\lfloor\left\lfloor\frac{y}{x}\right\rfloor-\frac{y}{x}+1\right\rfloor\Rightarrow\left\{\text{true}:
1,\ \text{false}: 0\right\}$$

And this is perfect - if we want to add something only if $x\mid y,$
 then we just multiply by this function - if it isn't true, it will just
zero out! 