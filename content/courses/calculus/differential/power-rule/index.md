---
type: lesson
index: 500
title: 

---

Now that you\'ve learned some methods of differentiating complex
functions, let\'s take a look at the following function:
$$f\left(x\right)=x^n.$$ How could we find  $f'\left(x\right)$ ?

It turns out that there\'s two ways to do this. We could use either
induction or the binomial theorem (or some third method that you can
email me about :)). I\'m going to go through the induction strategy
first, because it\'s a bit simpler. If you don\'t like induction or
haven\'t learned it yet (who is teaching you Precalculus?) you can skip
ahead to the other method. Otherwise, let\'s go!

#### Induction

In order to use induction, we need an inductive hypothesis and a few
base cases to support it. We can easily compute the following base cases
by hand: $$\frac{dx}{dx}=1x^0,$$ $$\frac{dx^2}{dx}=2x^1,$$ $$\text{and}$$ $$\frac{dx^3}{dx}=3x^2.$$ And so, we can hypothesize that
$$\frac{dx^n}{dx}=nx^{n-1}$$is true for all $n\lt k$ (This is something
we do a lot in induction).Then, we can try to find the derivative of 
$x^k.$ (Remember that the inductive hypothesis does not apply here,
because $k\nless k.$ To do this, we can use the product rule:
$$x^k=x\cdot x^{k-1}$$ $$\frac{dx^k}{dx}=\left(1\right)\left(x^{k-1}\right)+\left(x\right)\left(k-1\right)\left(x^{k-2}\right)$$ $$=x^{k-1}+\left(k-1\right)\left(x^{k-1}\right)$$ $$=kx^{k-1}.$$ And we
are done! Because we\'ve proved that the pattern begins, and we\'ve also
proved that it\'s possible to get from a base case to a non base case
while holding the pattern, we\'ve proved that:
$$\frac{dx^n}{dx}=nx^{n-1}.$$

#### Binomial Theorem

The proof of this derivative is more commonly done using the Binomial
theorem, which says that:
$$\left(x+y\right)^n=\binom{n}{0}x^ny^0+\binom{n}{1}x^{n-1}y^1+\cdots+\binom{n}{n-1}x^1y^{n-1}+\binom{n}{n}x^0y^n.$$
This, as you will see soon, turns out to be quite a useful definition
for us.  To calculate the derivative this time, we\'ll be using a first
principle limits approach. So, let\'s set up our limit:
$$\frac{dx^n}{dx}=\lim_{h\to0}\frac{\left(x+h\right)^n-x^n}{h}$$ Notice
that I\'m using $h$ instead of  $\delta x.$ It\'s just a different name
I gave it, and you can call it whatever you want. I generally like
calling it  $h,$ just because it\'s simpler to write.

Let\'s (partially) expand our binomial, using the binomial theorem:
$$\lim_{h\to0}\frac{\binom{n}{0}x^n+\binom{n}{1}hx^{n-1}+h^2\left(\cdots\right)-x^n}{h}$$
$$=\lim_{h\to0}\frac{\binom{n}{1}hx^{n-1}+h^2\left(\cdots\right)}{h}$$
$$=\lim_{h\to0}\binom{n}{1}x^{n-1}+h\left(\cdots\right)$$

Substituting  $h=0,$ $$\frac{dx^n}{dx}=nx^{n-1}.$$ And we are done!

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3OTczNDMxMjBdfQ==
-->