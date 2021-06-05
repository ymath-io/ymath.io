::: container
::: row
::: col-sm-3
### Calculus

Topics within Calculus

<a href="../../" class="nav-link">Home</a>

<a href="../../limits" class="nav-link">Limits</a>

<a href="../" class="nav-link">Derivatives</a>

<a href="../practice" class="nav-link ml-3 my-1">Practice</a>

<a href="../methods" class="nav-link ml-3 my-1">Methods</a>

<a href="../xn-der" class="nav-link ml-3 my-1"><span class="math inline"><em>x</em><sup><em>n</em></sup></span> Derivative</a>

<a href="../chain-rule" class="nav-link ml-3 my-1">Chain Rule</a>

<a href="../m-practice" class="nav-link ml-3 my-1">More Practice</a>

<a href="../physics" class="nav-link ml-3 my-1 active">Physics</a>

<a href="../rt" class="nav-link ml-3 my-1">Reference Table</a>

<a href="../../integrals" class="nav-link">Integrals</a>

<a href="#" class="nav-link disabled">Chapter 4 - Coming Soon</a>

------------------------------------------------------------------------
:::

::: col-sm-9
::: container
## Physics

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

The width of a rectangle increases at $4 \frac{cm}{s}$ and the height at
$3\ \frac{cm}{s}.$ The rate of change on the area with respect to $s$
when $h=5$ and $w=6$ is []{#answer1 .form-control-sm
.answerb}<img src="data:image/svg+xml;base64,PHN2ZyBpZD0idHUxIiBjbGFzcz0iYmkgYmktaGFuZC10aHVtYnMtdXAiIHdpZHRoPSIyZW0iIGhlaWdodD0iMmVtIiBzdHlsZT0iZGlzcGxheTpub25lIiB2aWV3Ym94PSIwIDAgMTYgMTYiIGZpbGw9InZhcigtLXN1Y2Nlc3MpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuODU0IDMuNjQ2YS41LjUgMCAwIDEgMCAuNzA4bC03IDdhLjUuNSAwIDAgMS0uNzA4IDBsLTMuNS0zLjVhLjUuNSAwIDEgMSAuNzA4LS43MDhMNi41IDEwLjI5M2w2LjY0Ni02LjY0N2EuNS41IDAgMCAxIC43MDggMHoiPjwvcGF0aD48L3N2Zz4=" id="tu1" class="bi bi-hand-thumbs-up" />

Hint

The information we have is:$$\frac{dh}{ds} = 3$$$$\frac{dw}{ds} = 4$$We
must find$$\frac{dwh}{ds} = ?$$

Hint

What are some of the methods of solving a derivative?

Show/Hide Solution

We can use the product rule to evaluate this
derivative:$$\frac{d wh}{ds} = h(\frac{dw}{ds})+ w(\frac{dh}{ds}).$$Substitute:$$\frac{d wh}{ds} = h(4)+ w(3).$$And,
when we plug in the given values:$$5\cdot  4 + 6\cdot 3 = \boxed{38}.$$

::: {style="height:10vh"}
:::

##### Derivatives

-   <a href="../m-practice" class="page-link">« More Practice</a>
-   <a href="" class="page-link">•</a>
-   <a href="../rt" class="page-link">Reference Table »</a>
:::
:::
:::
:::

::: page-footer
:::
