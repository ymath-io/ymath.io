---
index: 4
title: Comparison

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

The absolute value function we defined in the last lesson will be useful here.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzODU2ODkxMjRdfQ==
-->