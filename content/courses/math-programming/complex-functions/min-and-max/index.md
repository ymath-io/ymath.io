---
index:  7
title: Minimum and Maximum
type: lesson

---


So, let's say you are writing a mathematical program, and you reason that 

$$x\ne y\Rightarrow\frac{x}{y}>1.$$

 Right? The ratio must
be more than one if they are not equal. But then, someone tells you,
it's only true if $$x>y.$$ Argh! There goes your wonderful conjecture.
You could write that

$$x\ne
y\Rightarrow\frac{\max\left(x,y\right)}{\min\left(x,y\right)}>1.$$

But, those are non-standard functions!

Let's try to make a $\max$ function using only standard functions.

What we'll do is figure out whether $x-y$ is positive or negative. Then,
we'll return $x$ if it is positive and $y$ if it is negative.  To figure
out whether it is positive or negative, we compute
$$\text{isPositive}\left(x-y\right) =
\frac{\left|x-y\right|}{x-y}\Rightarrow\left\{+\rightarrow1,
-\rightarrow-1\right\}$$ If positive, we'll get $1,$ and if negative,
we will get $-1.$ Great - how do we put this to use? First,  we'll
configure the positive-negative function to output binary. This means
outputting $1$ if it is positive, and $0$ if it is negative.  

$$\text{isPositive}\left(x-y\right) =
\frac{\left|x-y\right|}{x-y}+1\Rightarrow\left\{+\rightarrow2,
-\rightarrow0\right\}$$ 

$$\text{isPositive}\left(x-y\right) = \frac{\frac{\left|x-y\right|}{x-y}+1}{2}\Rightarrow\left\{+\rightarrow1,
-\rightarrow 0 \right\}$$

 Okay, cool. Now, when the function returns
positive, we want to return $x.$ We can do that by multiplying by $x:$
$$\max\left(x,y\right) =
x\cdot\frac{\frac{\left|x-y\right|}{x-y}+1}{2}\Rightarrow\left\{x\rightarrow
x,\ y\rightarrow0\right\}$$ Oh, but now we get $0$ when the maximum
is $y!$ We can add the same function, but comparing against $y:$
$$\max\left(x,y\right) =
x\cdot\frac{\frac{\left|x-y\right|}{x-y}+1}{2}+y\cdot\frac{\frac{\left|x-y\right|}{y-x}+1}{2}\Rightarrow\left\{x\rightarrow
x, y\rightarrow y\right\}$$

Great! Now we just need a minimum function. All we need to do is switch
the outputs: 

$$\min\left(x,y\right) =
y\cdot\frac{\frac{\left|x-y\right|}{x-y}+1}{2}+x\cdot\frac{\frac{\left|x-y\right|}{y-x}+1}{2}\Rightarrow\left\{x\rightarrow
x,\ y\rightarrow y\right\}$$

 Can you fix my conjecture for me now?
Thanks!  


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTk4NTc1MDcwNV19
-->