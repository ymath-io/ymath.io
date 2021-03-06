---
index: 2
title: Negations
type: lesson

---

Let's say we have a boolean function to determine if a certain number is *acceptable*,  
$$ \text{isAcceptable}(x) \to \{0,1\}.$$

Suppose we are now presented with the task of designing a boolean function that determines whether a function is *unacceptable*.

In [Python](https://docs.python.org/3/tutorial/), we would normally do something like this:
```python
def is_unacceptable(bool_value: bool) -> bool:
    return not is_acceptable(bool_value)
```
A more generalized approach to this would be:
```python
def negate(boolValue: bool) -> bool{
	return not boolValue
}
def isUnacceptable(boolValue: bool) -> bool {
	return negate(isAcceptable(boolValue));
}
```
Let's try to define $\text{negate}(x)$ mathematically.
What we would like to do here is switch the outputs of the above function, such that we map $0$ to $1$ and $1$ to $0$. That is, we want to design a function $\text{negate}(x)$ such that
$$\text{negate}(0) = 1 $$ $$\text{negate}(1) = 0.$$

One thing to notice is that $$\text{negate}(x) + x = 1.$$ 
So, we can use this to say that 
$$\text{negate}(x) = 1 -x. $$ 

And we're done!
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwOTA2Mzg5NTYsMTcyODc4MjkxNSwtMj
A5NjQ3NTE1NCwtOTExNTU5MjMyXX0=
-->
