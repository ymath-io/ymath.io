---
type: lesson
index: 2
title: Introduction

---

Sometimes, we want to multiply a number by itself many times. Instead of having to write out $3\cdot3\cdot3\cdot3\cdot3$, we can use something called *exponential form.*

$$3^5=3\cdot3\cdot3\cdot3\cdot3$$
(read as 3 to the power of 5, 3 to the 5th power, or 3 to the 5th)

In the example above, $3^5$ means "multiply 3 by itself 5 times." The "$5$" is called the *exponent,* and the "$3$" is called the *base.* A base together with its exponent is called a *power*.

To type a power on a computer, type {base}^{exponent}. For example, for $3$^$5$ we would type $3$^$5$ or {$3$}^{$5$}. 

Let's look at another example. 
$$(x-1)^{2y}$$
The base is $x-1$, and the exponent is $2y$. So, this expression means to multiply $x-1$ by itself $2y$ times.

@1

Now for an interesting question: what is $3^0$? Well, we are multiplying $3$ by itself $0$ times, so the answer is $0$, right? Not quite--we'll use something called an identity element to show why that isn't the case. 

### Identity Element
An *identity element* is special because it doesn't change the value of another element when an operation is applied to both elements. For now, we can just think of elements as numbers. 

For example, the *additive identity* is 0 because adding 0 to any number doesn't change its value. 
$$5+0=5$$
Similarly, the *multiplicative identity* is 1 because multiplying any number by 1 doesn't change its value.  
$$5\cdot1=5$$

When we rewrite multiplication as repeated addition, we can write the additive identity at the beginning. For example, 
$$3\cdot2=0+3+3$$
Using this notation, it should follow that 
$$3\cdot1=0+3$$
$$3\cdot0=0$$

Likewise, we can rewrite exponentiation as repeated multiplication with the multiplicative identity in the beginning.
$$3^2=1\cdot3\cdot3$$
$$3^1=1\cdot3$$
$$3^0=1$$

Notice that $3^0$ actually equals $1$! In the following lessons, you will learn several other reasons why any number to the power of $0$ should equal $1$.

### Order of Operations
The *Order of Operations* is a standard order of evaluating an expression. Many students use the mnemonic PEMDAS to remember that expressions in **p**arentheses are evaluated first, followed by **e**xponents, **m**ultiplication and **d**ivision, and **a**dition and **s**ubtraction. However, be very careful if you use PEMDAS. Multiplication and division are considered to be on the same level, meaning that both $3\cdot4\div5$ and $3\div4\cdot5$ are evaluated from left to right. Similarly, addition and subtraction are on the same level, so $3+4-5$ and $3-4+5$ are evaluated from left to right.

For "towers" or "stacks" of exponents, evaluate the expression from top to bottom. For instance, 
$$2^{3^0}=2^{\left(3^0\right)}=2^1=2$$
$$2^{3^0}\neq\left(2^3\right)^0=8^0=1$$
$$w^{x^{y^z}}=w^{\left(x^{\left(y^z\right)}\right)}$$

### Warnings
- Usually, $x^y$ is not equal to $y^x$. For example, $2^3=8$ and $3^2=9$. This is different from addition and multiplication, where you can switch the numbers around. 
- Be careful with the Order of Operations. Exponents come before all operations except parentheses!
$$x\cdot y^z=x\cdot\left(y^z\right)​\neq \left(x\cdot y\right)^z$$
$$-y^z=-1\cdot\left(y^z\right)​\neq (-y)^z$$
The second example shows a very common error. A negative sign is the same as multiplying by $-1$, so make sure you evaluate the exponent before the negative sign.

Now that we know how to evaluate exponents (and how not to evaluate them), we are ready to practice our new skills!
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyMzI4ODQzNDIsLTE1MjIyNTU5ODAsLT
IwMTQxNTU4NDEsNjgyMDUwNDkwXX0=
-->