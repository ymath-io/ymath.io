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

Nice! We just showed that $x^2\cdot x^3 = x^5$. This is because $x^2$ is the product of $2$ `$x$'s, and $x^3$ is the product of $3$ `$x$'s, so the product of $x^2$ and $x^3$ is the product of $5$ $`x$'s in total. 

Let's make an even more general statement! What is $x^a \cdot x^b$?

We can't write this out in multiplication because we don't know what $a$ and $b$ are, so we don't know how many $x$'s to write! But, we can use the power (pun unintended) of words:

$$x^a \cdot x^b = (\text{product of $a$ $x$'s})(\text{product of $b$ $x$'s})$$

That should give us a total of $(a+b)$ $x$'s multiplied together, which is the same as $x^{a+b}$. So, 

$$x^a \cdot x^b = x^{a+b}$$

Awesome, we've just proved the Product of Powers Property! (Actually, we've shown that it works for integers, which is good enough for now.) Can you see why this property is called the Product of Powers Property?

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
=\frac{\cancel x\cdot \cancel x\cdot x\cdot x\cdot x}{\cancel x\cdot \cancel x}
=x^3$$

Let's generalize this a bit more. How can we rewrite $\frac{x^a}{x^b}$?

$$\frac{x^a}{x^b}=\frac{\text{product of $a$ `$x$'s}}{}$$

## Power to a Power

## Power of a Product

## Power of a Quotient






<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE3MzY4NTIwMSw5NDI0MDY5MjUsLTI4MD
kyODM2NSwtMTg4NTY1NDY4XX0=
-->