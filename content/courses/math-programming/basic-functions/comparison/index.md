---
index: 4
title: Comparison
type: lesson

---

## A sketchy use-case

Often, as we saw in the last lesson, we need to make choices depending on whether a number is larger than another. For example, let's say we have two test grades, $x$ and $y$. Whoever got the higher test grade get five extra credit points for superb performance.

In Python, this would look something like the following.
```py
def applyExtraCredit(x: float, y: float) -> tuple[float, float]:
	return ( (x+5 if isLarger(x,y) else 0) + (x if not isLarger(x,y) else 0),
	 (y+5 if isLarger(y, x) else 0) + (y if not isLarger(y, x) else 0))
 # There is definitely a better way to do this using python, but
 # the above code models what we'll be doing using math.
```

## Defining a comparison function

In order for this to work, we'll need a boolean function $\text{isLarger}(x,y)$ that returns whether or not $x>y$. 

We can test if $x-y$ is positive. If it is, then we can be sure that $x>y$.

Luckily, we have a function for that already which we derived in the previous lesson:

$$\text{isPositive}\left(x\right) = \frac{\frac{\left|x\right|}{x}+1}{2}\Rightarrow\left\{+\rightarrow1,
-\rightarrow 0 \right\}$$

So now, we just need to plug in $x-y$ to this function, and we will get our answer.

$$\text{isLarger}\left(x, y\right) = \frac{\frac{\left|x-y\right|}{x-y}+1}{2}\Rightarrow\left\{\text{yes}\rightarrow1,
\text{no}\rightarrow 0 \right\}$$

<!--stackedit_data:
eyJoaXN0b3J5IjpbNDQ1OTI3ODE0LC0xMzg1Njg5MTI0XX0=
-->