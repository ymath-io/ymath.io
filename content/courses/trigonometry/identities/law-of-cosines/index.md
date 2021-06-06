---
title: Law of Cosines
decription: Law of Cosines!
index: 5
type: lesson

---

## LAW OF COSINES

There are many proofs for the Law of Cosines on the internet, but not
all of them take the best approach. Here is my explanation, and I hope
that it helps you to understand the other proofs.

#### What is the Law of Cosines?

Suppose that you have two line segments and an angle measurement. You
must construct a triangle such that the two line segments form that
angle and that their endpoints are connected by a third line segment.

Try this by moving around a few pens on the table, and you will soon
find that for each pair of sides and angle, there is only one third
length that can create the desired triangle. This is confirmed by SAS
congruence. The goal of the Law of Cosines is simple: if we are given
two side lengths and the angle that they form, how do we find the length
of the third side?

#### Finding the Relationship

**Question:** Given the values **a**, **b**, and **x** in the diagram
below, how do we find **c**?

From [Functions](../../functions/exploration/index.md), recall that given an angle and hypotenuse of a right triangle, we can express the legs in terms of the hypotenuse. Hence, we can label the following sides:

IMAGE HERE

Notice that the two segments in the base of the triangle add up to b. Remember that the way we got $b- a \cos(x)$ was by subtracting $a\cos(x)$ from b.

Now, let's try and find c. Right away, we can observe that c is the hypotenuse of the smallest right triangle. Using the Pythagorean Theorem, we can state that:

$$a^2\sin^2(x)+(b-a\cos(x))^2 = c^2$$

Next, we'll simplify the second expression:

$$a^2\sin^2(x)+b^2-2ab\cos(x)+a^2\cos^2(x)=c^2$$

Recall that because of the Pythagorean Theorem,

$$\sin^2(x)+\cos^2(x)=1$$

Because of this, we can just cancel out the first and last terms to an
$a^2$:

$$a^2+b^2-2ab\cos(x)=c^2$$

That's it! Notice that the Law of Cosines looks a lot like the Pythagorean Theorem, but not quite. Any idea why?

Extra: This proof assumes a certain thing about our triangle. What is the assumption, and how can we prove that the Law works when the assumption is false?