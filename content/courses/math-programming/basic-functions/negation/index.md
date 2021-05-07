---
index: 3
title: Negations
type: lesson

---

Let's say we have a boolean function to determine if a certain number is *acceptable*,  
$$ b(x) \to \{0,1\}.$$

Suppose we are now presented with the task of designing a boolean function that determines whether a function is *unacceptable*.

In computer science, we would normally do something like this:
```js
function isUnacceptable(boolValue){
	return !
}
```

What we would like to do is switch the outputs of the above function, such that we map $0$ to $1$ and $1$ to $0$. That is, we want to design a function 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTMzMDIyNjM1NywtMjA5NjQ3NTE1NCwtOT
ExNTU5MjMyXX0=
-->