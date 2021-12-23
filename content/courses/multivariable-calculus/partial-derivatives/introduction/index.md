---
type: lesson
title: Introduction
index: 2

---

Single variable calculus is useful in functions concerning two variables, generally $x$ and $y$, where $y$ is dependent only on $x$. But sometimes, we have multiple factors affecting a result.

For instance, the distance of a particle from the origin $(0,0)$  depends on both $\Delta x$ and $\Delta y$.

Let's consider the equation $$z=x^2 + y^2.$$ $z$ here is basically the square of the aforementioned distance. Now we ask, how does $z$ change as the particle moves right? Left? Up? Down? Diagonally?

We see that the rates of change are not constant. 

[ insert diagram here ]

As in, moving point $A$ right changes $z$ faster than moving $A$ left. How can we represent a varying rate of change? Calculus!

Suppose $A$ has coordinates $(x, y).$ Moving $A$ left and right doesn't change $y$, it only changes $x$. So, when considering resultant change in $z$, we can treat $y$ as a constant. Thus, as our particle moves left and right,

$$ \frac{dz}{dy} = 0. $$ 

Now, we wish to understand the change in $z$ with respect to the change in $x$. So, we differentiate $z$ with respect to $x$.

$$\frac{dz}{dx} = \frac{dx^2}{dx} + \frac{dy^2}{dx} $$

Using chain rule, we simplify this to

$$\frac{dz}{dx} =2x + \frac{dy^2}{dy} \cdot \frac{dy}{dx} $$

But as we established, $\frac{dy}{dx} = 0$, so

$$\frac{dz}{dx} = 2x .$$

So as $x$ increases, the rate of change of $z$ increases. This is consistent with our earlier observation. We call this type of measurement a **partial derivative**, and we write it as

$$f(x,y) = x^2 + y^2 \Rightarrow f_x(x,y) = 2x.$$