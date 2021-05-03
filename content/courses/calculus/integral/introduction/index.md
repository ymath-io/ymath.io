---
type: lesson
title: Introduction
description: ''
index: 

---
For example, let's try to take the integral of $y=2x.$ We'll find the area under the line from $0$ to some arbritary point $x,$ just as we found the slope at some point $x$ during differentiation.

<iframe src="[https://www.desmos.com/calculator/zje3tcej79?embed](https://www.desmos.com/calculator/zje3tcej79?embed "https://www.desmos.com/calculator/zje3tcej79?embed")" class="graph" style="border: 1px solid #ccc" frameborder=0></iframe>

First, we visualize our function - we have a triangle, where the $y$ value is always twice the $x$ value. So, if we take the first vertical bar with a width of $dx,$ then the height of that bar would be $2dx.$ And, if we took the next vertical bar with width $dx,$ then our distance from the origin is now $2dx,$ so we can raise the bar as high as $4dx.$ And, if we take the third bar with width $dx,$ then we are now $3dx$ out from the origin, so we can raise the bar as high as $6dx.$

Now that we have the dimensions of the first few bars, let's see what happens when we find their area:  $$\left(dx\right)\left(2dx\right)+\left(dx\right)\left(4dx\right)+\left(dx\right)\left(6dx\right)=2\left(dx\right)^2\left(1+2+3\right).$$ And if we take the next few bars, we would have  $$\left(dx\right)\left(2dx\right)+\left(dx\right)\left(4dx\right)+\left(dx\right)\left(6dx\right)+\left(dx\right)\left(8dx\right)+\left(dx\right)\left(10dx\right)+\left(dx\right)\left(12dx\right)=2\left(dx\right)^2\left(1+2+3+4+5\right).$$ How long does this series continue for? That would depend on how many bars there are.

Let's see: if the total width of the area is $x,$ and the width of each bar is $dx,$ then there should be $\frac{x}{dx}$ bars. So the complete series would look like: $$2\left(dx\right)^2\left(1+2+3+\cdots+\frac{x}{dx}\right).$$ How do we find the sum of this series? We can use the Gauss method: $$2\left(dx\right)^2\frac{\left(1+\frac{x}{dx}\right)\left(\frac{x}{dx}\right)}{2}$$ 

After simplification:  $$dx^2\cdot\left(\frac{x}{dx}+\frac{x^2}{\left(dx\right)^2}\right)=xdx+x^2.$$ Now, we get to decide how wide our bars should be - i.e., the value of $dx.$ Well, the smaller our bars are, the more accurate our calculation will be. So, we're going to go with infinitesimally small: $$\lim_{dx\to0}xdx+x^2=x\left(0\right)+x^2=x^2.$$ 

We are done! We can now write our answer as $$\int2x\ dx\ =\ x^2+C.$$ Why, you may ask, do we have to write " $+C$ "?&nbsp;What is $C$ ?

Before we talk about that, let's ask ourselves another, explorable question - why is it, that: $$\frac{d\left(x^2+C\right)}{dx}=2x$$ for some constant $C,$ and  $$\int2x\ dx\ =x^2+C?$$ Well, let's think about it- when we take the differentiation of the integration of something, we are asking ourselves how much the integration changes when we increase the upper bound by $dx.$ 

This is a question we know how to answer, because $dx$ is the width of one of our rectangles! Each time we increase the upper bound, we are adding another rectangle. Every time that we add another rectangle to the end, the height of that rectangle is going to be twice our upper bound, since $y=2x.$ And our if our upper bound is $x,$ (because we are trying to find a general formula here), then the area of that rectangle is going to be $2x\ dx.$

Wait a minute - isn't that the function that we were trying to integrate? Yes! This is no coincidence - it's the Fundamental Theorem of Calculus.

We'll look deeper at the actual theorem and the meaning of " $+C$ " in the next lesson. See you there!