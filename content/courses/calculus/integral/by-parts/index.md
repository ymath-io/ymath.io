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

$$\frac{d\ \int \textcolor{orchid}{h(x)}\ dx\ \cdot g\left(x\right)}{dx}=h\left(x\right)\textcolor{green}{g\left(x\right)}+\int \textcolor{orchid}{h(x)}\ dx\cdot \textcolor{green}{g'\left(x\right)}$$
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTIwNDQzODc0OSw5OTM1NjA3NDMsLTI3MD
QyMzE4NiwxOTExNTYyODM0LDE0NzU0NzA5MTIsLTcwOTQyMTE2
Ml19
-->