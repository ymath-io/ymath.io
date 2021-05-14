Floating-point numbers are the most common way of representing real numbers in computing. As such, they are an essential part of most modern programs and underpin much of the world's most critical infrastructure. They address a fundamental problem of computer science: Computers are discrete, numbers are not. Understanding floating-point arithmetic---and its limitations---is essential for numerical analysis and helpful for any serious programmer.

Computers represent integers in a relatively straightforward manner. The integer $14$, for example, is stored as the binary number $1110_2$, and thus needs $4$ bits. Different types of integers vary by the number of bits they are allocated. A $32$-bit unsigned[^1] integer, one of the most common types, may be used to store any number from $0$ to

$\underbrace{11111111111111111111111111111111_2}_{32\,\text{bits}}=4294967295.$

Progressively larger sizes of integers give us more and more range, and we choose the size appropriate to our use case.

Representing real numbers proves trickier. Because there are infinite real numbers in any range, we can never represent every number in a given range. One option is to choose an arbitrary denominator and store the numerator of a fraction; if we use a $32$-bit integer and a denominator of $2^{16}$, we can represent the numbers:

$0, \frac{1}{65536}, \frac{2}{65536}, \frac{3}{65536}, \dots, \frac{4294967295}{65536}\approx 65535.999987$

[^1]: Unsigned integers store positive values only

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA0NzcyNjE0Niw2ODY2OTUxOTRdfQ==
-->