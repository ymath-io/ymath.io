---
type: lesson
title: Chain Rule
index: 10

---

The Chain Rule is technically a method, but it\'s so important that it
deserves its own section.

#### What is the Chain Rule?

Suppose that we have a function $f(g(x))$, and we want to differentiate
it. How would we do it?

Remember that differentiation is the slope, which is
$$\frac{\text{Change in }f(g(x))}{\text{Change in } x}=\frac{d f(g(x))}{d x}.$$

This isn\'t something we immediately know how to solve. What we do know
how to solve is $$\frac{d~ f(n)}{d n}$$

What if $n$ was $g(x)$? Then our numerator would be $f(g(x))$:

$$\frac{d~f(g(x))}{d~g(x)}.$$

But, this isn\'t quite what we wanted - now the denominator doesn\'t
match. No problem - we can multiply by the differentiation of $g(x)$:

$$\frac{d~f(g(x))}{\cancel{d~g(x)}}\cdot \frac{\cancel{d~g(x)}}{d x} =\frac{d f(g(x))}{d x} .$$

That\'s it - that\'s the Chain Rule.

#### How long can the chain go?

Really, it\'s a chain - you choose the length. Rather, the problem
chooses the length.

For example,

$$\frac{d~d(e(f(g(x))))}{d~e(f(g(x)))}\cdot\frac{d~e(f(g(x)))}{d~f(g(x))}\cdot\frac{d~f(g(x))}{d~g(x)}\cdot \frac{d~g(x)}{d x} =\frac{d~d(e(f(g(x))))}{d x}.$$

### Usefulness

Remember during <a href="../practice" class="text-success">practice</a>
when you had to differentiate $\ln x$? It was a pain for me to write the
solution and for you to read it.

Now, we\'ll differentiate the same function in just a few easy steps!
(No, that doesn\'t mean that the rest of the steps are hard).

$$y=\ln x$$ $$x = e^y$$ $$\frac{dx}{dx} = \frac{d e^y}{dx}$$
$$\frac{dx}{dx} = \frac{d e^y}{dy}\cdot \frac{dy}{dx}$$
$$1 = e^y \frac{dy}{dx}$$$$\frac{1}{e^y} = \frac{dy}{dx}$$ Substitute
from second step: $$\boxed{\frac{1}{x} = \frac{dy}{dx}}$$
