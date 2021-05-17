---
type: lesson
index: 3
title: Properties

---

You might remember that when you learned about multiplication, you learned about some properties like the Associative Property, Commutative Property, and the Distributive Property. Now, we'll be looking at some properties of exponents.

## Product of Powers
Let's start with a simple question. What is 
$2^5$?

We know a way to evaluate powers -- write them as multiplication! 

$$2^5=2\cdot2\cdot2\cdot2\cdot2=32$$

So, $2^5=32$. How about another question: what is $2^2\cdot2^3$?

We can solve this using the Order of Operations. We evaluate
$$2^2\cdot2^3=(2\cdot2)(2\cdot2\cdot2)=(4)(8)=32$$

Notice anything? It's the same answer as before! Is it a coincidence?

It turns out that a very important clue is in the first step of evaluating both expressions. Take a look:
$$2\cdot2\cdot2\cdot2\cdot2$$
$$(2\cdot2)(2\cdot2\cdot2)$$

These expressions look very similar! In fact, they're equal by the Associative Property of Multiplication. This property states that if your expression only has multiplication in it, it doesn't matter where you put the parentheses. The product will always be the same. 

Now we know why $2^2\cdot2^3=2^5$. Let's generalize this a bit more. Is there a way we can rewrite $x^2\cdot x^3$? Let's try:

$$x^2\cdot x^3
=(x\cdot x)(x\cdot x\cdot x)
=x\cdot x\cdot x\cdot x\cdot x
=x^5$$

Nice! We just showed that $x^2\cdot x^3 = x^5$. This is because $x^2$ is the product of $2$ $``x"$s, and $x^3$ is the product of $3$ $``x"$s, so the product of $x^2$ and $x^3$ is the product of $5$ $``x"$s in total. 

Let's make an even more general statement! What is $x^a \cdot x^b$? Even though we don't know the values of $a$ and $b$, we can still write out the powers.

$$x^a \cdot x^b 
= (\underbrace{x\cdot x\cdot \ldots \cdot x}_\text{$a$ times})
(\underbrace{x\cdot x\cdot \ldots \cdot x}_\text{$b$ times})$$
$$= (\underbrace{x\cdot x\cdot \ldots \cdot x}_\text{$a+b$ times})= x^{a+b}$$

Since $x^a$ is the product of $a$ $``x"$s, and $x^b$ is the product of $b$ $``x"$s, the product of $x^a$ and $x^b$ is the product of $(a+b)$ $``x"$s.

Awesome, we've just proved the Product of Powers Property! (Actually, we've shown that it works for integers, which is good enough for now.) Can you see why it's called the Product of Powers Property?

### Warnings
The bases of the powers have to be the same for this property to work. If you try to simplify $x^2\cdot y^3$, you will not get anywhere since it's already simplified.
$$x^2 \cdot y^3=(x\cdot x)(y\cdot y\cdot y)$$
$$\neq x^5\neq y^5 \neq (x+y)^5 \neq (xy)^5$$
In case you missed it, all the expressions on the second line are **not equal** to the expressions on the first line.  Don't make up new properties unless you know that they're true. Chances are, the property will be false! 

Speaking of false properties, make sure the powers are being multiplied, not added together. 
$$x^2+x^3\neq x^5$$

If you're curious, a valid way to rewrite the above expression is to use the Product of Powers Property along with the Distributive Property.  
$$x^2+x^3=x^2\cdot1+x^2\cdot x^1=x^2(1+x)$$

## Quotient of Powers
The Quotient of Powers Property is very similar to the Product of Powers Property, except, as you probably guessed, it involves quotients instead of products. It lets us easily simplify expressions like $\frac{x^5}{x^2}$.

Speaking of which, what is $\frac{x^5}{x^2}$? Let's write it out. 
$$\frac{x^5}{x^2}
=\frac{\cancel xxx \ldots x}{\cancel xxx \ldots x}
=x^3$$

Let's generalize this a bit more. How can we rewrite $\frac{x^a}{x^b}$, where $a\geq b$?

$$\frac{x^a}{x^b}
= \frac{\overbrace{xxx \ldots x}^\text{$a$ times}}
{\underbrace{xxx \ldots x}_\text{$b$ times}}$$

$$= \frac
	{\overbrace{\cancel{xxx \ldots x}}^\text{$b$ times}\cdot 
	\overbrace{xxx \ldots x}^\text{$a-b$ times}}
	{\underbrace{\cancel{xxx \ldots x}}_\text{$b$ times}}$$

$$=x^{a-b}$$

Since $a\geq b$, there are at least as many $``x"$s in the numerator as the denominator, so all the $``x"$s in the denominator will cancel out. So, there will be $(a-b)$ $``x"$s left over, which equals $x^{a-b}$.

We just showed that $\frac{x^a}{x^b}=x^{a-b}$!

## Power to a Power
Is there a way to simplify $(x^y)^z$? Let's first substitute some values so that we can write the powers as repeated multiplication.

$$(x^2)^3
=(x^2)\cdot(x^2)\cdot(x^2)
=(x\cdot x)\cdot(x\cdot x)\cdot(x\cdot x)
=x^6$$

There are $3$ groups of $2$ $``x"$s being multiplied together, which makes $2\cdot3=6$ $``x"$s in total. 

Let's generalize this. 

$$(x^y)^z=\underbrace{(x^y)(x^y)\dots(x^y)}
_\text{$z$ times}$$
$$= \underbrace{
	\underbrace{(xxx \ldots x)}_\text{$y$ times}
	\underbrace{(xxx \ldots x)}_\text{$y$ times} \ldots 
	\underbrace{(xxx \ldots x)}_\text{$y$ times}
}_\text{$z$ times}$$
$$=\underbrace{xxx \ldots x}_\text{$yz$ times}
=x^{yz}$$

In $(x^y)^z$, there are $z$ groups of $``\left(x^y\right)"$s being multiplied together. $z$ groups of $y$ is the same thing as $yz$, so there are $yz$ $``x"$s multiplied together. Therefore, 

$$(x^y)^z=x^{yz}$$

## Power of a Product

## Power of a Quotient






<!--stackedit_data:
eyJoaXN0b3J5IjpbNzQwMzA3NjAzLC00MzMxNjUwLDIwNDkyMj
gzNTQsMTA5Mzc2NTc5MCwzMjgwMzg5MjIsLTE0ODQ0OTAzMDMs
OTQyNDA2OTI1LC0yODA5MjgzNjUsLTE4ODU2NTQ2OF19
-->