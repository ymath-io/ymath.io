

---
Title: Applications
---
Remember in the beginning, we said that when we get to derivatives, we'll be doing limits all the time? Now is the time to learn some useful limits that you are going to rely heavily on in the future. The first one of these is
$$\lim_{x\to 0}\frac{\sin{x}}{x}.$$
The solution to this limit is not immediately obvious, so we are going to take a detour and review something that you (should have) learned in Precalculus.

<iframe  src="https://www.desmos.com/calculator/jmllvl6cqk?embed" class="graph" width="500px" height="500px" style="border: 1px solid #ccc" frameborder="0"></iframe>

In the graph above, we have 3 values :
$$\sin{\theta}, \theta, \tan{\theta}.$$
If you don't immediately have an answer, think for a few minutes about how we could order these three values in an inequality. One possible (wrong) answer is
$$\tan{\theta} < \theta < \sin{\theta}.$$
Record your answer here before continuing:
</p><input type="text" id="txt_1" onkeyup="saveValue(this);" placeholder="Type your answer here" class="form-control form-control-sm">

<b>Saumya help me I don't know how to insert a user input box, I tried to copy paste the code but it didn't work :( </b>

Looking at the graph tells us that
$$\sin{\theta} < \theta < \tan{\theta}.$$
Now, we can use this property to evaluate our limit! Dividing by $\sin{\theta}$ gives
$$1 < \frac{\theta}{\sin{\theta}} < \frac{1}{\cos{\theta}}.$$

Oops! We have our value, but it's upside down! Let's plug in $x$ to this anyways, and see what we can do. Well, we can just take the reciprocal of all of them and we'll be good to go, right?? No [Why not?]. However, we _can_ take the reciprocal, and then reverse the signs. So now, we have
$$\cos{x} < \frac{\sin{x}}{x} < 1.$$
We know for a fact that
$$\lim_{x\to 0}\cos{x}=1.$$
So, now we say for sure that
$$1 <\lim_{x\to 0} \frac{\sin{x}}{x} < 1.$$
This is pretty redundant, and implies that
$$\lim_{x\to 0}\frac{\sin{x}}{x}=1.$$
Yes, really - it's just 1. Now, try a two-step limit. Don't forget to use what you just learned! 2.
$$\lim_{x\to 0}\frac{\tan{x}}{x}$$

<b>Saumya help me I don't know how to insert a user input box, I tried to copy paste the code but it didn't work :( </b>

This is one example of how the limit we just learned can sneak up on you! Here's how we transform it into two problems we can solve:
$$\lim_{x\to 0}\frac{\tan{x}}{x} =\lim_{x\to 0}\frac{\sin{x}}{x} \cdot \frac{1}{\cos{x}} = \lim_{x\to 0}\frac{\sin{x}}{x} \cdot  \lim_{x\to 0}\frac{1}{\cos{x}} =1\cdot 1=1.$$
One times one is... one? Yep.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3ODc0NDcxODEsLTI3MDI5MTQ0NSwxMT
c1NTEzNTg0XX0=
-->