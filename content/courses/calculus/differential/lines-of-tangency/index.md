---
index: 9.2
title: Tangent Lines
type: lesson

---

In the previous lesson, we saw how derivatives can help us find the slope of a function. When the function's slope varies, the derivative gives us a formula for the slope, given the location.

In this lesson, we'll look at an interesting application of the above — constructing lines tangent to nonlinear functions.

<iframe src="https://www.desmos.com/calculator/vcpwd6c0uz?embed"  class="graph"></iframe>

Let's say we have a function $f(x)$, and we want to construct a line tangent to the function at a point $\left(a,f(a)\right).$

What should be the slope of the line? 

For the function to 'align' with the line at the desired point, they must have the same slope. So, the slope of the line must be equal to $f'(a)$, the slope of the function at $x=a$.

Using point-slope form, we have:
$$\text{point} = (a, f(a))$$ $$\text{slope} = f'(a)$$

$$y - f(a) = f'(a) (x-a).$$

Now, we'll try this with an example.
Let's say we want to graph a line tangent to $$y=x^3$$ at $$x=-1.$$

For context, $y=x^3$ looks like this:

<img class="graph" src="/img/graphs/x-cubed.png"/>

Now, we'll use the point-slope approach we just came up with.

To find the slope of $f(x)=x^3$, we need its derivative. Using the [power rule](/learn/calculus/differential/power-rule), we know that $$f'(x)=3x^2.$$
So, the slope at $x=-1$ is $$f'(-1)=3(-1)^2=\boxed{3}.$$

Using point-slope, we get  
$$ y - (-1) = 3(x- (-1))$$ $$y+1=3x+3$$ $$\boxed{y=3x+2}.$$

Now, try another example on your own. If you get stuck, use a hint!

@1

@2

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU3MDgyNDM1NywtMTYwNzA3NDY0NywtOT
M4MjMzNTMxLC01NTA1MDczMDcsLTE4MTkyNDY0NjEsNTIxMjU3
NzExLDE5NjcxMDExOTIsLTEwMDUxNDMxNTksLTk0MzE5ODU0OS
wtMTk1NzI1NDQ3OSwxNzg0NTk4MDc5XX0=
-->