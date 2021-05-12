---
title: Integration by Substitution
index: 18
type: lesson

---

Remember the  [Chain Rule](https://ymath.io/calculus/derivatives/chain-rule)? The Chain Rule said that we can perform the following algebra:
$$\frac{ d f(g(x))}{d g(x)} \cdot \frac{d g(x)}{dx} = \frac{ d f(g(x))}{dx}.$$

Now, how might we do the same sort of thing with integrals? In other words, can we find a similar formula for

$$\int f(g(x)) \ dx ?$$

Let's consider what we _do_ know how to solve:

$$\int f(g(x))\ d\ g(x)  =  \int f(x)\ d x$$

Now, we'll do some "harmless" algebra:

$$\int f(g(x)) d\ x \cdot \frac{d g(x)}{d g(x)}=  \int f(g(x))\ d x$$

All we did was multiply the left side by 1, so nothing really changed. We can continue by rearranging some terms:

$$\int f(g(x))\ d\ g(x) \cdot \frac{dx}{d\ g(x)}=  \int f(g(x))\ d x$$

$$\int f(x)\ dx  \cdot \frac{dx}{d\ g(x)}=  \int f(g(x))\ d x$$

Notice how the second factor is the reciprocal of the differentiation of $g(x)$. So, we compute the differentiation of the second function, multiply by the first function, and differentiate it normally. This is generally much easier to do, as you will see in the practice problems.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjgyMTIzMDc1XX0=
-->
