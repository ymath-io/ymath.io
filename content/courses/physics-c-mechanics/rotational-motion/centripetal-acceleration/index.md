---
index: 100
title: Centripetal Acceleration
type: lesson

---

If you've played tether ball, swung a yo-yo, or spun a necklace on your finger, you've witnessed **centripetal motion**. 

Centripetal motion is when an object travels around a fixed point, in a circle. 

Assuming out angular velocity ($\omega: \text{rad/s}$) is constant, we will construct equations for the object's position, velocity, and acceleration.

The angular displacement of the object can be represented using a vector:
$$ \vec{x} = \left<  r\cos\omega t , r\sin\omega t\right>.$$
From the definition of velocity, we know that
$$\frac{d\vec{x}}{dt} = \vec{v}.$$
Differentiating, we see:
$$\vec{v} = \left<  -r\omega\sin\omega t , r\omega\cos\omega t \right>.$$
We'll differentiate this one more time, because
$$\frac{d\vec{v}}{dt} = \vec{a}.$$

This gives us 
$$\vec{a} = \left<  -r\omega^2\cos\omega t , -r\omega^2\sin\omega t \right>.$$

From each of these, we gather that

$|x| = r,$
$|v| = r\omega,$
and
$|a| = r\omega^2.$
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTczMjg2MDU2MV19
-->