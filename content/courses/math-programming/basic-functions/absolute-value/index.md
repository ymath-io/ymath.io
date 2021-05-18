---
index: 3
type: lesson
title: Absolute Value

---

Many times, we just want the magnitude of our number. For example, if we're calculating the distance between two numbers, we will want the absolute value of their difference.

In Python, this would be
```python
def distanceBetween(x: float, y: float) -> float:
	return abs(x-y);

```
However, a four function calculator does not have absolute value on it! We are restricted to the four functions of arithmetic.

We can start by computing $$x-y.$$

However, if $y>x$, then this will produce a negative value


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTU1Mzc1MzkwNyw2MTg4ODI0MzUsMTg4Nz
A4ODY4M119
-->