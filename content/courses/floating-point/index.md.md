Floating-point numbers are the most common way of representing real numbers in computing. As such, they are an essential part of most modern programs and underpin much of the world's most critical infrastructure. They address a fundamental problem of computer science: Computers are discrete, numbers are not. Understanding floating-point arithmetic---and its limitations---is essential for numerical analysis and helpful for any serious programmer.

Computers represent positive integers in a relatively straightforward manner. The integer $14$, for example, is stored as the binary number $1110_2$, and thus needs $4$ bits. Different types of integers vary by the number of bits they are allocated. A $32$-bit unsigned[^1] integer, one of the most common types, may be used to store any number from $0$ to

$\underbrace{11111111111111111111111111111111_2}_{32\,\text{bits}}=4294967295.$

Progressively larger sizes of integers give us more and more range, and we choose the size appropriate to our use case.

Representing positive real numbers proves trickier. Because there are infinite real numbers in any range, we can never represent every number in a given range. One option is to choose an arbitrary denominator and store the numerator of a fraction; if we use a $32$-bit integer and a denominator of $2^{24}$, we can represent the numbers:

$0, \frac{1}{16277216}, \frac{2}{16277216}, \frac{3}{16277216}, \dots, \frac{4294967295}{16277216}(\approx 256)$

So we can represent numbers between $0$ and $256$ to an accuracy of $\frac{1}{16277216}$. This system is called a *fixed-point* number system.

But what if we wanted to represent even smaller and larger positive numbers? On the order of $10^{-10}$ and $10^{10}$? We'd need a different denominator or a larger integer type. It becomes impractical fast and inefficient to compute. Increasing accuracy to allow for smaller positive numbers *near zero* means having that same accuracy *everywhere*.

If uniform accuracy is desirable, fixed-point is your friend. But most mathematical operations are more sensitive to small changes in small numbers than small changes in large numbers. Dividing $1$ by $0.001$ vs. by $0.002$ is a big difference, while dividing by $256$ vs. by $256.001$ is often negligible. The solution is floating-point numbers, whose selling point is their ability to have accuracy that varies throughout their range. The double-precision floating-point type takes up only $64$ bits, but can represent both the number $2^{-1074}\approx 4.94\cdot 10^{-324}$ and $2^{1022}\approx 4.49\cdot10^{307}$.

In this course, we delve into the mechanics of floating-point arithmetic, including algorithms, mathematical formalizations, re


[^1]: Unsigned integers store positive values only

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNzA3NTg5MTcsLTMwODE4NzE2NSw2OD
Y2OTUxOTRdfQ==
-->