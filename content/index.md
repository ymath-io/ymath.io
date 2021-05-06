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
│   │   ├── index.md # Lesson page, served at 
│   │   │            # /learn/powers-and-logs/powers/introduction
│   │   │
│   │   └── problems/ # don't worry about these
│   │       ├── 1.md  # we will do these later.
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

## YAML Front Matter
> What are these three dashes? `---`

When you're looking at existing pages, you'll see something like this at the top of the page:
```markdown
---
title: Integrals
type: chapter
description: Integrals are so cool!
index: 13

---

Welcome to Integrals

## Prerequisites
* You should have finished the previous two chapters!

		...
```
The stuff between the `---` is called **YAML Front Matter (YFM)**. You can read more about that [here.](https://middlemanapp.com/basics/frontmatter/)
In short,
* Everything between the `---` does not get rendered in the actual body of the course.
* The front matter contains important details about the page, which are used by the site to determine how to order and present the page, usually in navigation.
* The front matter is necessary in order for your page to show up on the site

### Front Matter values

#### `title`
This value sets the title of the page.
It is used in the sidebar and the page title.
With a chapter or lesson page, this is shown in green at the top of the page. Course titles are shown as a large heading throughout the entire course.
For example,  
`/content/courses/calculus/limits/delta-epsilon/index.md`
```markdown
---
title: Definition of a Limit
description: Understand the formal definition of a limit, known as Delta-Epsilon.
index: 2
type: lesson

---
### Exploration

Aside from the intuitive definition we just saw, there is also a 
```
this will show as:
`https://dev.ymath.io/learn/calculus/limits/delta-epsilon/`
![image](https://user-images.githubusercontent.com/65318685/117349050-d0044900-ae5f-11eb-991b-a402d0bad62a.png)

#### `description`
This should be pretty self explanatory. Optional for lessons.

#### `index`
This affects the ordering of the pages in the course. These numbers  are used to determine the previous/next buttons at the bottom of the page. Every single page in the course (except for problems) needs to have an `index` property. If you suddenly find that you need to insert a page between  to 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4MTEyNDY4MTYsMTUzODI1NzU5MiwxMj
I2NTEwMjIzLC0xMTg5MDUxMDIsMjAzNjMzNTE0MCwxNjQ4MjY4
ODgsNjY1Mzk2NjkwXX0=
-->