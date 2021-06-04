---
type: lesson
index: 500
title: 

---

## Methods

  

The first-principles approach to finding a derivative is time consuming,

and often messy or difficult.

  

As you continue to solve derivatives, you\'ll find yourself doing the

same manipulations over and over again for different problems.

  

Instead of wasting time like this, we can find efficient methods to

differentiate (find the derivative of) new functions using

differentiations that we already know.

  

For example, if we have a function $h(x) ={f(x)}{g(x)}$ and we want to

find $$\frac{d h(x)}{dx},$$ then we can find a formula for this in terms

of $f(x)$ and $g(x)$, since $h(x)$ is defined using them.

  

<div>

  

Try it on your own first, and plug it in when you think you\'ve got it.

  

\$\\displaystyle{\\frac{df(x)g(x)}{dx}}= \$ []{#answer1 .form-control-sm

.answerb}![](data:image/svg+xml;base64,PHN2ZyBpZD0idHUxIiBjbGFzcz0iYmkgYmktaGFuZC10aHVtYnMtdXAiIHdpZHRoPSIyZW0iIGhlaWdodD0iMmVtIiBzdHlsZT0iZGlzcGxheTpub25lIiB2aWV3Ym94PSIwIDAgMTYgMTYiIGZpbGw9InZhcigtLXN1Y2Nlc3MpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjg1NCAzLjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtNyA3YS41LjUgMCAwIDEtLjcwOCAwbC0zLjUtMy41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDYuNSAxMC4yOTNsNi42NDYtNi42NDdhLjUuNSAwIDAgMSAuNzA4IDB6Ij48L3BhdGg+Cjwvc3ZnPg==){#tu1

.bi .bi-hand-thumbs-up}

  

Hint 1

  

\

Can\'t distribute? $$ab-cd$$ $$=ab-ad+ad-cd$$ $$=a(b-d)+d(a-c).$$ Yes

you can.

  

Hint 2

  

\

What is $$\lim_{\delta x \to 0} \frac{f(x+\delta x)-f(x)}{\delta x}=??$$

  

Show/Hide Solution

  

1.  Set up the limit:

$$\lim_{\delta x \to 0} \frac{f(x+\delta x)g(x+\delta x) -f(x)g(x)}{\delta x}$$

  

2.  Apply the factorization rule (see Hint 1):

$$\lim_{\delta x \to 0} \frac{f(x+\delta x)g(x+\delta x)-f(x+\delta x)g(x)+f(x+\delta x)g(x) -f(x)g(x)}{\delta x}$$

  

3.  Separate:

$$\lim_{\delta x \to 0} \frac{f(x+\delta x)g(x+\delta x)-f(x+\delta x)g(x)}{\delta x}+ \lim_{\delta x \to 0}\frac{f(x+\delta x)g(x) -f(x)g(x)}{\delta x}$$

  

4.  Factor:

$$\lim_{\delta x \to 0}f(x+\delta x)\cdot\lim_{\delta x \to 0} \frac{g(x+\delta x)-g(x)}{\delta x}+ g(x)\lim_{\delta x \to 0}\frac{f(x+\delta x) -f(x)}{\delta x}$$

  

5.  These are just differentiations of $f(x)$ and $g(x)$! So, we can

substitute their differentiations:

  

$$\lim_{\delta x \to 0}f(x+\delta x)\cdot g'(x)+ g(x)f'(x)$$

  

6.  Finally, we approximate: $$\delta x \rightarrow 0$$

$$\frac{df(x)g(x)}{dx}=\boxed{ f(x)g'(x)+ g(x)f'(x)}$$

  

\$\\displaystyle{\\frac{d\\frac{f(x)}{g(x)}}{dx}}= \$ []{#answer2

.form-control-sm

.answerb}![](data:image/svg+xml;base64,PHN2ZyBpZD0idHUyIiBjbGFzcz0iYmkgYmktaGFuZC10aHVtYnMtdXAiIHdpZHRoPSIyZW0iIGhlaWdodD0iMmVtIiBzdHlsZT0iZGlzcGxheTpub25lIiB2aWV3Ym94PSIwIDAgMTYgMTYiIGZpbGw9InZhcigtLXN1Y2Nlc3MpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjg1NCAzLjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtNyA3YS41LjUgMCAwIDEtLjcwOCAwbC0zLjUtMy41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDYuNSAxMC4yOTNsNi42NDYtNi42NDdhLjUuNSAwIDAgMSAuNzA4IDB6Ij48L3BhdGg+Cjwvc3ZnPg==){#tu2

.bi .bi-hand-thumbs-up}

  

Hint 1

  

\

Remember the distribution rule from the previous problem?

  

Hint 2

  

\

Make two huge fractions, simplify, and add them

  

Show/Hide Solution

  

1.  Set up the limit:

$$\lim_{\delta x \to 0} \frac{\frac{f(x+\delta x)}{g(x+\delta x)} -\frac{f(x)}{g(x)}}{\delta x}$$

  

2.  Apply the factorization rule (see Hint 1 from previous problem):

$$\lim_{\delta x \to 0} \frac{\frac{f(x+\delta x)}{g(x+\delta x)} -\frac{f(x+\delta x)}{g(x)}+\frac{f(x+\delta x)}{g(x)} -\frac{f(x)}{g(x)}}{\delta x}$$

  

3.  Separate:

$$\lim_{\delta x \to 0} \frac{\frac{f(x+\delta x)}{g(x+\delta x)} -\frac{f(x+\delta x)}{g(x)}}{\delta x}+\frac{\frac{f(x+\delta x)}{g(x)} -\frac{f(x)}{g(x)}}{\delta x}$$

  

4.  Combine:

$$\lim_{\delta x \to 0}\frac{f(x+\delta x)}{g(x)g(x+\delta x)}\cdot\frac{g(x) -g(x+\delta x)}{\delta x}+\frac{1}{g(x)}\cdot\frac{f(x+\delta x)-f(x)}{\delta x}$$

  

5.  These are just differentiations of $f(x)$ and $g(x)$! So, we can

substitute their differentiations:

  

$$\lim_{\delta x \to 0}\frac{f(x+\delta x)}{g(x)g(x+\delta x)}(-g'(x))+\frac{1}{g(x)}f'(x)$$

  

6.  Now, we approximate: $$\delta x \rightarrow 0$$

$$\frac{f(x)}{g(x)g(x)}g'(x)+\frac{f'(x)}{g(x)}$$

$$= \boxed{\frac{f'(x)g(x)-g'(x)f(x)}{(g(x))^2}}$$

  

</div>
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA5NjQzOTU1NV19
-->