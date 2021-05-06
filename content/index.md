---
title: Welcome
description: Welcome to the documentation for YMath Content!

---

# Welcome!

Welcome to the content writing guide for YMath! 

If this is your first time here, then you need to [set up your environment](./readme.md).

## Writing Content

### The Structure of a Course

The site is structured into broad topics of study called **courses**. Each course has many **chapters**, and each chapter has many **lessons**.

The directory structure of a course named "Powers and Logs" looks like this:
```py
powers-and-logs/ # for example, 'calculus' or 'exponents'
├── index.md # /learn/powers-and-logs/ (course home page)
├── powers/
│   ├── index.md # /learn/powers-and-logs/powers/ (chapter home page)
│   ├── introduction/  
│   │   ├── index.md 
# /learn/powers-and-logs/powers/introduction
│   │   └── problems/ # don't worry about these
│   │       ├── 1.md
│   │       └── 2.md
│   ├── properties/
│   │   ├── index.md
│   │   └── problems/
│   │       ├── 1.md
│   │       ├── 2.md
│   │       └── 3.md
│   ├── graphs/
│   │   ├── index.md
│   │   └── problems/
│   │       ├── 1.md
│   │       ├── 2.md
│   │       ├── 3.md
│   │       └── 4.md
│   └── applications/
│       └── index.md
└── logarithms/
    ├── index.md
    ├── introduction/
    │   └── index.md
    └── properties/
        └── index.md
```
#### Remember that . . .

* Course homepages should be no more than
	* a welcome to the course
	* a brief overview of what one should expect to learn
	* a list of prerequisites
* Chapter homepages should
	* pose intriguing questions that will be answered in the chapter
		* Ex. "How could we find the slope of a curve?"
		* Ex. A cool graph with some interesting trend
	* *not* begin teaching anything
* Lesson pages
	* These are the actual course material where stuff is taught.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTI4MjI4MTg2MSwxNjQ4MjY4ODgsNjY1Mz
k2NjkwXX0=
-->