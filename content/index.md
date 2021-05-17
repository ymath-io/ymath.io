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
│   │       ├── 1.md  # if you don't need them.
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

## Formatting

All of our content is written in *Markdown*. You can familiarize yourself with basic syntax [here](https://www.markdownguide.org/basic-syntax/).


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

#### `title: text`
This value sets the title of the page.
It is used in the sidebar and the page title.
With a chapter or lesson page, this is shown in green at the top of the page. Course titles are shown as a large heading throughout the entire course.
For example,  
`/content/courses/calculus/limits/delta-epsilon/index.md`
```markdown
---
title: Definition of a Limit
description: Understand the formal definition of a limit, known as Delta-Epsilon.
index: 3
type: lesson

---
### Exploration

Aside from the intuitive definition we just saw, there is also a 
```
this will show as:
`https://dev.ymath.io/learn/calculus/limits/delta-epsilon/`
![image](https://user-images.githubusercontent.com/65318685/117349050-d0044900-ae5f-11eb-991b-a402d0bad62a.png)

#### `description: text`
This should be pretty self explanatory. Optional for lessons.

#### `index: number`
This affects the ordering of the pages in the course. These numbers  are used to determine the previous/next buttons at the bottom of the page. **Every single page in the course (except for problems) needs to have an `index` property.**

If you suddenly find that you need to insert a page between two others, do not shift all of the other pages manually. Instead, use decimals for your new page. 
For example, to insert a page between pages with index `2` and `3`, put the index of the new page as `2.5`.


#### `type: course | chapter | lesson`
This is another mandatory property for pages. It has three possible values: `course`, `chapter`, or `lesson`.

This property distinguishes what type of page this is, and what to do with it. 
Pages with `type: course` will be linked to in the course catalog. 
Pages with `type: chapter` will be linked to from the course navigation bar.

#### `author: text`
This property is only needed with `type: course`. It is the full legal/pen name of the author of the course.


#### `thumbnail: url`
This property is only needed with `type: course`.

## Practice Problems
*This is an optional feature.*

For many courses, it is necessary to include checks for understanding.
To do this, we can use optional extended syntax in the lessons.

### Guide
This guide will walk you through adding a practice problem to a lesson.

1. In your lesson's directory, create a folder called `problems`.
2. In this folder, create a file named `1.md`. In Stackedit, you only need to write `1`.
3. Fill the file with this content:
```markdown
---
type: problem
answers:
    - egg
    - the egg

---

@statement
What came first, the chicken or the egg?

@hint
Well, the chicken had to come from somewhere.

@solution
Ask your dad and he will tell you that **the egg came first**.

```
4. Now, anywhere in your lesson, insert the following line:
```markdown
...
@1 Try this classic riddle.
...
```

### Customizing

#### Answer validation
In order to check answers, we need a list of possible correct answers. 
Keep in mind that people might have different ways of typing the same thing.

In your frontmatter, add the following:
```markdown
answers:
    - x^2
    - y=x^2
```
*Replace these values with your own.*

Answers use LaTeX, so you can type that directly without $$.

#### Decorators

Problems have different fields where you might want to write stuff, like the **statement**, **hints**, or the **solutions**.

(Yes, you can have multiple solutions!)

Decorators separate your file body into sections and declares what kind of content is below them. 
Here's a list of available decorators:

* *`@statement`* This is the problem statement, or the question that's being asked.
* *`@hint`* This is an optional hint for the student. 
  The hint is hidden by default, and the student can show it when they need it. 
  You can have as many hints as you want.
* *`@solution`* This a solution to the problem.
  The solution is hidden by default, and the student can show it when they need it.
  You can have as many solutions as you want.




<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM1Nzk3OTM0MSwxNTE2MjI1NTM1LC0xOD
AyNDI1OTYsMTUzODI1NzU5MiwxMjI2NTEwMjIzLC0xMTg5MDUx
MDIsMjAzNjMzNTE0MCwxNjQ4MjY4ODgsNjY1Mzk2NjkwXX0=
-->

