::: container
::: row
::: col-sm-3
### Calculus

Topics within Calculus

<a href="../" class="nav-link">Home</a>

<a href="../../limits" class="nav-link">Limits</a>

<a href="../" class="nav-link">Derivatives</a>

<a href="../practice" class="nav-link ml-3 my-1">Practice</a>

<a href="../methods" class="nav-link ml-3 my-1">Methods</a>

<a href="../xn-der" class="nav-link ml-3 my-1"><span class="math inline"><em>x</em><sup><em>n</em></sup></span> Derivative</a>

<a href="../chain-rule" class="nav-link ml-3 my-1">Chain Rule</a>

<a href="../m-practice" class="nav-link ml-3 my-1 active">More Practice</a>

<a href="../physics" class="nav-link ml-3 my-1">Physics</a>

<a href="../rt" class="nav-link ml-3 my-1">Reference Table</a>

<a href="../integrals" class="nav-link">Integrals</a>

<a href="#" class="nav-link disabled">Chapter 4 - Coming Soon</a>

------------------------------------------------------------------------
:::

::: col-sm-9
::: container
## More Practice

In the previous section, we learned useful formulae for solving
derivatives. They are called the

Product Rule:
$\displaystyle{\frac{df(x)g(x)}{dx} = f'(x)g(x)+g'(x)f(x)}$

and the

Quotient Rule:
$\displaystyle{\frac{d \frac{f(x)}{g(x)}}{dx} = \frac{f'(x)g(x)-g'(x)f(x)}{(g(x))^2}}$

Now it\'s time to put these formulas to use.

Here are some practice problems to use these formulas.

1.  $\displaystyle{\frac{d \tan{x}}{dx} = }$ []{#answer1
    .form-control-sm
    .answerb}<img src="data:image/svg+xml;base64,PHN2ZyBpZD0idHUxIiBjbGFzcz0iYmkgYmktaGFuZC10aHVtYnMtdXAiIHdpZHRoPSIyZW0iIGhlaWdodD0iMmVtIiBzdHlsZT0iZGlzcGxheTpub25lIiB2aWV3Ym94PSIwIDAgMTYgMTYiIGZpbGw9InZhcigtLXN1Y2Nlc3MpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjg1NCAzLjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtNyA3YS41LjUgMCAwIDEtLjcwOCAwbC0zLjUtMy41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDYuNSAxMC4yOTNsNi42NDYtNi42NDdhLjUuNSAwIDAgMSAuNzA4IDB6Ij48L3BhdGg+Cjwvc3ZnPg==" id="tu1" class="bi bi-hand-thumbs-up" />

    Hint 1

    What\'s another way to write $\tan x$

    Hint 2

    Which rule should we use, product or quotient?

    Show/Hide Solution

      
    Use the division rule to solve the derivative:

    ::: {.container .row}
    ::: col-sm
    $$\tan x = \frac{\sin x}{\cos x}$$
    :::

    ::: col-sm
    $$f(x) \rightarrow \sin x$$ $$f'(x) \rightarrow \cos x$$
    :::

    ::: col-sm
    $$g(x) \rightarrow \cos x$$ $$g'(x) \rightarrow - \sin x$$
    :::
    :::

    $$\frac{\cos x\cdot\cos x+\sin x\cdot\sin x}{\cos^2x}=\frac{\cos^2x+\sin^2x}{\cos^2x}$$

    Use the pythagorean identity:

    $$=\frac{1}{\cos^2 x} = \sec^2x$$

2.  $\displaystyle{\frac{d f(x)e^x}{dx}}= e^x \cdot$ []{#answer2
    .form-control-sm
    .answerb}<img src="data:image/svg+xml;base64,PHN2ZyBpZD0idHUyIiBjbGFzcz0iYmkgYmktaGFuZC10aHVtYnMtdXAiIHdpZHRoPSIyZW0iIGhlaWdodD0iMmVtIiBzdHlsZT0iZGlzcGxheTpub25lIiB2aWV3Ym94PSIwIDAgMTYgMTYiIGZpbGw9InZhcigtLXN1Y2Nlc3MpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjg1NCAzLjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtNyA3YS41LjUgMCAwIDEtLjcwOCAwbC0zLjUtMy41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDYuNSAxMC4yOTNsNi42NDYtNi42NDdhLjUuNSAwIDAgMSAuNzA4IDB6Ij48L3BhdGg+Cjwvc3ZnPg==" id="tu2" class="bi bi-hand-thumbs-up" />

    Hint

    Which rule should we use? Quotient, or product?

    Show/Hide Solution

    Use the product rule to solve the derivative

    ::: row
    ::: col-sm
    $$e^x \rightarrow g(x)$$
    :::

    ::: col-sm
    $$f(x)\rightarrow f(x)$$
    :::
    :::

    $$f\left(x\right)e^x+f'\left(x\right)e^x$$

    Distribute:

    $$=\boxed{e^x\left[f\left(x\right)+f'\left(x\right)\right]}$$

3.  \$\\displaystyle{\\frac{d \\sec x}{dx}}= \$ []{#answer3
    .form-control-sm
    .answerb}<img src="data:image/svg+xml;base64,PHN2ZyBpZD0idHUzIiBjbGFzcz0iYmkgYmktaGFuZC10aHVtYnMtdXAiIHdpZHRoPSIyZW0iIGhlaWdodD0iMmVtIiBzdHlsZT0iZGlzcGxheTpub25lIiB2aWV3Ym94PSIwIDAgMTYgMTYiIGZpbGw9InZhcigtLXN1Y2Nlc3MpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjg1NCAzLjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtNyA3YS41LjUgMCAwIDEtLjcwOCAwbC0zLjUtMy41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDYuNSAxMC4yOTNsNi42NDYtNi42NDdhLjUuNSAwIDAgMSAuNzA4IDB6Ij48L3BhdGg+Cjwvc3ZnPg==" id="tu3" class="bi bi-hand-thumbs-up" />

    Hint

    $$\sec x = \frac{1}{\cos x}$$

    Show/Hide Solution

    Use the Quotient Rule to solve the derivative:

    ::: {.container .row}
    ::: col-sm
    $$\sec x = \frac{1}{\cos x}$$
    :::

    ::: col-sm
    $$f(x) \rightarrow 1$$ $$f'(x) \rightarrow 0$$
    :::

    ::: col-sm
    $$g(x) \rightarrow \cos x$$ $$g'(x) \rightarrow - \sin x$$
    :::
    :::

    $$\frac{\left(0\right)\left(\cos x\right)-\left(-\sin x\right)\left(1\right)}{\cos^2x}=\frac{\sin x}{\cos^2x}=\boxed{\tan x\sec x}$$

4.  \$\\displaystyle{\\frac{d\\csc x}{dx}}= \$ []{#answer4
    .form-control-sm
    .answerb}<img src="data:image/svg+xml;base64,PHN2ZyBpZD0idHU0IiBjbGFzcz0iYmkgYmktaGFuZC10aHVtYnMtdXAiIHdpZHRoPSIyZW0iIGhlaWdodD0iMmVtIiBzdHlsZT0iZGlzcGxheTpub25lIiB2aWV3Ym94PSIwIDAgMTYgMTYiIGZpbGw9InZhcigtLXN1Y2Nlc3MpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjg1NCAzLjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtNyA3YS41LjUgMCAwIDEtLjcwOCAwbC0zLjUtMy41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDYuNSAxMC4yOTNsNi42NDYtNi42NDdhLjUuNSAwIDAgMSAuNzA4IDB6Ij48L3BhdGg+Cjwvc3ZnPg==" id="tu4" class="bi bi-hand-thumbs-up" />

    Hint

    \$\$\\csc x = \\frac{1}{\\sin x}

    Show/Hide Solution

    Use the Quotient Rule to solve the derivative:

    ::: {.container .row}
    ::: col-sm
    $$\sec x = \frac{1}{\sin x}$$
    :::

    ::: col-sm
    $$f(x) \rightarrow 1$$ $$f'(x) \rightarrow 0$$
    :::

    ::: col-sm
    $$g(x) \rightarrow \sin x$$ $$g'(x) \rightarrow \cos x$$
    :::
    :::

    $$\frac{\left(0\right)\left(\sin x\right)-\left(\cos x\right)\left(1\right)}{\sin^2x}=-\frac{\cos x}{\sin^2x}=\boxed{-\csc x\cot x}$$

```{=html}
<!-- -->
```








              

##### Derivatives

-   <a href="../chain-rule" class="page-link"><span aria-hidden="true">«</span></a>
-   <a href="../chain-rule" class="page-link">Chain Rule</a>
-   <a href="" class="page-link">•</a>
-   <a href="../physics" class="page-link">Physics</a>
-   <a href="../physics" class="page-link"><span aria-hidden="true">»</span></a>
:::
:::
:::
:::

::: page-footer
:::
