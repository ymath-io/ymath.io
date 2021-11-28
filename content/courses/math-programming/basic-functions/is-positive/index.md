---
index: 3.5
title: "Positivity"
type: lesson-draft

---

What if we wanted to make sure our input was positive before we used it in a function?

To our rescue comes the absolute value function. By dividing the number by its magnitude, we can determine its direction. 

$$\frac{\left|x\right|}{x}\Rightarrow\left\{+\rightarrow1,
-\rightarrow-1\right\}$$ 

If positive, we'll get $1,$ and if negative,
we will get $-1.$ 

Now, we need to configure the positive-negative function to output binary, so that we can use it as a building block later. This means
outputting $1$ if it is positive, and $0$ if it is negative.  

$$\text{isPositive}\left(x\right) =
\frac{\left|x\right|}{x}+1\Rightarrow\left\{+\rightarrow2,
-\rightarrow0\right\}$$ 

$$\text{isPositive}\left(x-y\right) = \frac{\frac{\left|x\right|}{x}+1}{2}\Rightarrow\left\{+\rightarrow1,
-\rightarrow 0 \right\}$$


Success!