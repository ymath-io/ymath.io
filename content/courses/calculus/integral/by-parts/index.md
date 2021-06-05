---
type: lesson
title: Integration by Parts
index: 19

---

In differential calculus, we derived [formulas to differentiate products of functions](/learn/calculus/differential/methods).

Recall that $$\frac{d\ \color{teal}f(x) \color{green}g(x)}{dx} = \color{teal}f'(x)\color{green}g(x)\color{currentcolor}+\color{teal}f(x)\color{green}g'(x)\color{currentcolor}.$$

**Integration by Parts** is a method to do the same sort of thing, for integrals. The formula can be derived simply by re-arranging the product rule (shown above).

In order to see this a bit better, we'll perform the following substitution: $$\textcolor{orchid}{h(x)} = \textcolor{teal}{f'(x)}.$$ The Fundamental Theorem of Calculus tells us that $$\int \textcolor{orchid}{h(x)}\ dx = \textcolor{teal}{f(x)}.$$

Let's substitute! Replacing all occurrences of $\textcolor{teal}{f(x)},$ we get: 

$$\frac{d\ \int \textcolor{orchid}{h(x)}\ dx\ \cdot \textcolor{green}{g\left(x\right)}}{dx}=\textcolor{orchid}{h\left(x\right)}\textcolor{green}{g\left(x\right)}+\int \textcolor{orchid}{h(x)}\ dx\cdot \textcolor{green}{g'\left(x\right)}.$$

Now, there's a big ugly $\frac{d}{dx}$ here - let's get rid of it! Remember - integration kills differentiation, and vice-versa!

So, we integrate both sides:


$$\ \int h\left(x\right)dx\ \cdot g\left(x\right)=\int h\left(x\right)g\left(x\right)\ dx+\big{\int}\int h\left(x\right)dx\ \cdot g'\left(x\right)\ dx$$
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTk4MjE1ODg0LC0xNTUxMzIzMDQ1LDk5Mz
U2MDc0MywtMjcwNDIzMTg2LDE5MTE1NjI4MzQsMTQ3NTQ3MDkx
MiwtNzA5NDIxMTYyXX0=
-->