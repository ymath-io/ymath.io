---
index: 3
type: lesson
title: Absolute Value

---

## Why is this useful?

Many times, we just want the magnitude of our number. For example, if we're calculating the distance between two numbers, we will want the absolute value of their difference.

In Python, this would be
```python
def distanceBetween(x: float, y: float) -> float:
	return abs(x-y);

```
However, a four function calculator does not have absolute value on it! We are restricted to the four functions of arithmetic.

We can start by computing $$x-y.$$

However, if $y>x$, then this will produce a negative value. This is where an absolute value function comes in. If you have the basic calculator we mentioned earlier, you don't have a button for absolute value (yet). Let's make one!

## Finding magnitude
To find the magnitude of a value $x$, we need a function that ignores its sign. Then, we can undo the function. The most simple such function is the square function:

$$\tex


<!--stackedit_data:
eyJoaXN0b3J5IjpbNDY4MjYxOTAzLC01NTM3NTM5MDcsNjE4OD
gyNDM1LDE4ODcwODg2ODNdfQ==
-->