---
type: lesson
index: 5
title: Power to a Power Property

---

This is the last property we'll be learning in this chapter. Get ready for lots of powers with the Power to a Power property!

- Power to a Power: $(x^a)^b=x^{ab}$


## Power to a Power
Is there a way to simplify $(x^a)^b$? Let's first substitute some values so that we can write the powers as repeated multiplication.

$$(x^2)^3
=(x^2)\cdot(x^2)\cdot(x^2)
=(x\cdot x)\cdot(x\cdot x)\cdot(x\cdot x)
=x^6$$

There are $3$ groups of $2$ $``x"$s being multiplied together, which makes $2\cdot3=6$ $``x"$s in total. 

Now we can simplify the general expression.

$$(x^a)^b=\underbrace{(x^a)(x^a)\dots(x^a)}
_\text{$b$ times}$$
$$= \underbrace{
	\underbrace{(xxx \ldots x)}_\text{$a$ times}
	\underbrace{(xxx \ldots x)}_\text{$a$ times} \ldots 
	\underbrace{(xxx \ldots x)}_\text{$a$ times}
}_\text{$b$ times}$$
$$=\underbrace{xxx \ldots x}_\text{$ab$ times}
=x^{ab}$$

In $(x^a)^b$, there are $b$ groups of $``\left(x^a\right)"$s being multiplied together. This makes a total of $ab$ $``x"$s multiplied together. Therefore, $(x^a)^b=x^{ab}$.

## Warnings
Recall from the first lesson that towers of exponents are evaluated from the top down. So, in general,
$$x^{y^z}=x^{\left(y^z\right)}\neq \left(x^y\right)^z=x^{yz}$$
$$x^{y^z}\neq x^{yz}$$

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNjg2NTcyNjcsLTE1OTcwMTA5NzNdfQ
==
-->