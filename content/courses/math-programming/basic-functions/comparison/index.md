---
index: 4
title: Comparison

---

Often, as we saw in the last lesson, we need to make choices depending on whether a number is larger than another. For example, let's say we have two test grades, $x$ and $y$. Whoever got the higher test grade get five extra credit points for superb performance.

In Python, this would look something like
```py
def applyExtraCredit(x: float, y: float) -> tuple[float, float]:
	return ( (x+5 if isLarger(x,y) else 0) + (x if not isLarger(x,y) else 0),
	 (y+5 if isLarger(y, x) else 0) + (y if not isLarger(y, x) else 0))
 # There is definitely a better way to d
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjA1NjcwMjUyXX0=
-->