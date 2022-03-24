---
type: lesson
title: Applications of Derivatives
index: 12

---
Now that you\'ve learned how to find the derivatives of basic (and
not-so-basic) functions, let\'s try putting this knowledge to use in the
real world.

In the problems below, you\'ll be asked to compare the rate of change in
two related values. For example, if your mom buys three candies everyday
and gives two to you and one to your sister, what would the change in
your candies be relative to the change in your sister\'s candies?

We can set up a derivative for that!
$$\text{Let }y=\text{your candies}$$
$$\text{Let}\ x=\text{your sister's candies}$$ And now, we can set up an
equation to represent $y$ in terms of $x:$ $$y=2x.$$ Since everytime
your sister gets a candy, you get two, you get twice the candies. Great!
Let\'s find the derivative. $$\frac{d\ 2x}{dx}=2\cdot1x^0=2.$$ That was
so simple- it\'s just two!Let\'s try another example.

Suppose we have a bubble into which air constantly flows in at a rate of
$12\pi\ \mu L$ per second $\left(s\right).$ Let\'s try to find the rate
of change in the radius of the bubble (which we know will always be
spherical.) A sphere has a few properties, including volume, surface
area, and radius. Which of them is being *directly* manipulated when air
flows into the bubble?

That would be volume, because microliters $\left(\mu L\right)$ is a unit
of volume. Now that we know what properties we are watching, let\'s
write some equations. $$v=\frac{4}{3}\pi r^3$$ $$\frac{dv}{ds}=12\pi$$
Notice that we went straight to the derivative for the second equation.
This is because we haven\'t been given enough information to write an
equation - we don\'t know how many microliters the bubble started with
before air began flowing in. However, we *do* know the slope of the
equation, and derivative is just another word for slope.

Now, let\'s find the derivative of the other function:
$$\frac{d\frac{4}{3}\pi r^3}{dr}=\frac{4}{3}\pi\ \cdot\ \frac{dr^3}{dr}=\frac{4}{3}\pi\cdot3r^2=4\pi r^2.$$
Food for thought: isn\'t that the surface area formula? Make a theory.
Maybe prove it. 

Okay, so now we know the following values:
$$\frac{dv}{dr},\frac{dv}{ds}$$ And we want to know what is
$$\frac{dr}{ds}.$$ Hmm\... I\'m getting the chain rule vibe. Are you?

We can setup an equation with all three of these values, thanks to the
chain rule! $$\frac{dv}{ds}=\frac{dv}{dr}\cdot\frac{dr}{ds}$$ Substitute
what we already know: $$12\pi=4\pi r^2\cdot\frac{dr}{ds}$$
$$\frac{3}{r^2}=\frac{dr}{ds}.$$ And we are done! Now, try the following
problem on your own.

@1
<!--stackedit_data:
eyJoaXN0b3J5IjpbODQxNjk0NDY2XX0=
-->