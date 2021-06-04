---
type: lesson
title: Introduction
description: An intuitive introduction to derivatives
index: 6

---
## Slope of a \... non-linear function!

  

Okay, so now you\'re a whiz at limits, but you still don\'t feel like you\'re doing Calculus!

Yeah, I know - you want to start writing $\frac{dy}{dx}$ and those weird
S-shaped signs, that look like $\int$. I know I did!

  

In that case, my friend, we have some good news - we\'re not so far from
all that. Just hang in there.
On with the lesson.

Suppose we have a function $y=3x-5$.

What\'s the slope?

**It\'s 3, right?**
Good. Just checking.

Okay, next question. What\'s the slope of the line $$y=x^2?$$


What do you mean, you don\'t know?

Oh\... you mean it keeps changing? Right. When $x$ increases at a constant

speed, the speed at which $y$ increases increases.

 Go back, and read that to yourself a few more times, until it makes
sense.

<iframe src="https://www.desmos.com/calculator/kh3mig4qor?embed" class="graph" />

In the graph above, the blue line is *tangent* to the parabola at the

green point, which is called the *point of tangency.*

 

Try to move the green \"tangent\" point around and see the change in the

slope of the line. Once you get a feel for what\'s going on, unhide the

black line.

  

If we were to zoom in an infinite amount to the point of tangency, we\'d

have difficulty telling the line and parabola apart, because they get so

close together.

  

In fact, you can try it yourself by clicking in the lower right of the

graph and zooming in!

  

Because the line and the *portion* of the parabola are almost the same,

we say that the slope of the parabola at the point of tangency is equal

to the slope of the tangent.

  

Now, the only task we have is to develop a general equation for the

slope of the parabola at any point.

  

> **Note:** As you may have seen elsewhere, $\Delta$ usually stands for
 \"change in\". In Calculus, $\delta$ (lowercase $\Delta$) usually means
\"a very small change in\". That\'s $\delta$ a definition you already
know.

  

In the graph below, we have a zoomed-in version of $y=f(x)$, an

arbitrary function. We\'ve chosen two values of $x$:

  

$a$ and $a+\delta x$.

  

Their respective $y$ values on the graph will be $f(a)$ and

$f(a+\delta x)$.

<iframe src="https://www.desmos.com/calculator/crcyhxkkmm?embed" class="graph"/>

Make sure to write your answers in terms of $f(x)$, $a$, and $\delta x$. 
To type $\delta$ (\"change in\"), type \"delta\", and the symbol should pop up on its own.

 

The general formula for slope is 


The slope of the line going through the green and blue points can be expressed as 
 

The second one was a bit tricky. The answer is

$$\frac{f(a+\delta x)-f(a)}{\delta x}.$$

  

The above expression describes the change in the $y$-value, or $f(x)$,

and divides it by $\delta x$, or the change in $x$.

  

If we can make $\delta x$ infinitesimally small, then this can help us

find the slope at any value of $(x,f(x))$.

  

**I\'m going to go ahead and swap out $x$ for $a$ in the above
expression, just to emphasize that this works for any value of $x$.**

  

$$\frac{f(x+\delta x)-f(x)}{\delta x} = \frac{\delta y}{\delta x}.$$

  

Ah, yes. Where were we? We were going to compute the above when

$\delta x$ is infinitesimally small. How do we do that?

  

Remember that *infinitesimally small* means that the number is

approaching $0$, but it\'s not exactly 0. So we have to evaluate the

above when $\delta x$ is approaching $0$.

  

We just learned exactly how to do that using limits!

We can set up the limit like this:

$$\lim_{\delta x \to 0}\frac{f(x+\delta x)-f(x)}{\delta x}.$$

Believe it or not, that\'s it!

 
When we plug in a definition of $f(x)$, such as $f(x)=x^2$ to the limit,

we can evaluate the limit to get another function, which we call

$f'(x)$.



**Quick check:** What is the relationship between $f'(x)$ and $f(x)$?

The definition of $f'(x)$ goes like this:

The value of $f'(a)$, for any $a$ within the domain of $f(x)$, evaluates to the instantaneous slope of the function $f(x)$ when $x=a$.

Basically, if $f(x)$ is your position, then $f'(x)$ is your

velocity.

  

  

Now, let\'s try an example. Let\'s try to find the slope of $f(x)=x^2$.

  

Step 1: Set up the limit.

$$\lim_{\delta x \to 0}\frac{(x+\delta x)^2-x^2}{\delta x}.$$

  

Step 2: Solve the limit!

$$\lim_{\delta x \to 0}\frac{x^2 + 2x\delta x + (\delta x)^2-x^2}{\delta x}$$

  

$$=\lim_{\delta x \to 0}\frac{2x\delta x + (\delta x)^2}{\delta x}$$

  

$$=\lim_{\delta x \to 0}2x + \delta x$$

 

And, now that $\delta x$ is out of the denominator, we can substitute

$\delta x =0$:
$$\frac{\delta y}{\delta x}=2x$$

<!--stackedit_data:
eyJkaXNjdXNzaW9ucyI6eyJaRXJSbnhOYmNYTGdlRWJqIjp7In
N0YXJ0IjoyNTQ1LCJlbmQiOjI1NzcsInRleHQiOiJUaGUgZ2Vu
ZXJhbCBmb3JtdWxhIGZvciBzbG9wZSBpcyJ9LCIxS0hDTklpT1
liU1FmVEZiIjp7InN0YXJ0Ijo2MDAsImVuZCI6NjYxLCJ0ZXh0
IjoiT2theSwgbmV4dCBxdWVzdGlvbi4gV2hhdFxcJ3MgdGhlIH
Nsb3BlIG9mIHRoZSBsaW5lICQkeT14XjI/JCQifSwiN1R0ejZM
VjY2T0djMGhmbSI6eyJzdGFydCI6MjYyMSwiZW5kIjoyNjYyLC
J0ZXh0IjoiZ3JlZW4gYW5kIGJsdWUgcG9pbnRzIGNhbiBiZSBl
eHByZXNzZWQgYXMifSwiQlh4UlM1WjRXdFkyVURJTiI6eyJzdG
FydCI6Mzg2OCwiZW5kIjozOTM3LCJ0ZXh0IjoiKipRdWljayBj
aGVjazoqKiBXaGF0IGlzIHRoZSByZWxhdGlvbnNoaXAgYmV0d2
VlbiAkZicoeCkkIGFuZCAkZih4KSQ/In19LCJjb21tZW50cyI6
eyJnWHNxNzRIU3lrekcxcHRiIjp7ImRpc2N1c3Npb25JZCI6Il
pFclJueE5iY1hMZ2VFYmoiLCJzdWIiOiJnaDo2NTMxODY4NSIs
InRleHQiOiJJbXBvcnQgYXMgcHJhY3RpY2UgcHJvYmxlbSIsIm
NyZWF0ZWQiOjE2MjI4NDA4MzQ5OTh9LCIxcjdBYVNkdk51dmlr
eVhiIjp7ImRpc2N1c3Npb25JZCI6IjFLSENOSWlPWWJTUWZURm
IiLCJzdWIiOiJnaDo2NTMxODY4NSIsInRleHQiOiJpbXBvcnQg
YXMgcHJhY3RpY2UgcHJvYmxlbSIsImNyZWF0ZWQiOjE2MjI4ND
A4NTYxNzB9LCJSdVIwVmpmUU9DYmNrRlQyIjp7ImRpc2N1c3Np
b25JZCI6IjdUdHo2TFY2Nk9HYzBoZm0iLCJzdWIiOiJnaDo2NT
MxODY4NSIsInRleHQiOiJpbXBvcnQgYXMgcHJhY3RpY2UgcHJv
YmxlbSIsImNyZWF0ZWQiOjE2MjI4NDA5MjgzOTh9LCJBOGxVQk
VDMW4zdlR0UkYxIjp7ImRpc2N1c3Npb25JZCI6IkJYeFJTNVo0
V3RZMlVESU4iLCJzdWIiOiJnaDo2NTMxODY4NSIsInRleHQiOi
JpbXBvcnQgYXMgcHJhY3RpY2UgcHJvYmxlbSIsImNyZWF0ZWQi
OjE2MjI4NDA5NjI3NDB9fSwiaGlzdG9yeSI6WzE0MTQ4ODMzNT
UsMTU5MDY3ODg3OSwxMTQ3NTc2NDJdfQ==
-->