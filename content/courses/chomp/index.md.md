Chomp is a two-player perfect-information strategy game. Starting from an $3\times 8$ rectangle of chocolate squares, players take turns making "chomps"—choosing a square and removing all squares above and/or to the right of it. Whoever is forced to chomp the last, "poisoned" square loses the game. The game generalizes to any size board.

An example game is shown below. Having forced Player 1 to chomp the last square, Player 2 wins the game.

% make figure

Chomp seems simple, perhaps a back-of-the-napkin problem, but turns out to be deeply complex even on relatively small boards. In fact, no non-brute-force solution is known! Computers already struggle with the $11\times 12$ game and a $20\times 21$ game is out of the question for even supercomputers. The game has surprising connections to combinatorics, number theory, and chaos theory, and certain subsets of the game give rise to intriguing visualizations.

## The game

Chomp is probably best appreciated by playing a game. You can play against different AIs below; "random" plays a random move, "optimal" plays perfectly, and "human" plays semi-randomly.

% make widget

We can make some immediate observations. First, there are some general positions that are clearly winning or losing for the player who must move. An "L" with side length $2$ is losing; any move allows the other player to reduce to the poisoned square. A $2\times 2$ square is winning, because cutting at $(2, 2)$ gives the other player the "L". In fact, any L with equal-length arms is losing, because the player's chomp can be responded to with the analogous chomp on the other arm and eventually forcing the player to cut the last square. (For the rest of this article, we will use this "winning position" and "losing position" terminology.)

Extending this analysis, an $L$ with unequal arm lengths is winning because it can always be cut to give the opponent an equal-armed $L$. Indeed, *any* position that can be cut down an equal-armed $L$ is winning! So perfect players must try to keep the width and height of the position unequal.

The "square $L$" strategy recalls a strategy-stealing argument, which can be used to show any $m\times n$ rectangle is winning (besides $m=n=1$). We proceed by proof by contradiction. Suppose the $m\times n$ rectangle is losing. Then no matter what the first player plays, the opponent gets a winning position, with a winning chomp at $(x,y)$, let's say. So if Player 1 cuts off a single square, Player 2 has a winning chomp at $(x,y)$ that gives Player 1 a losing position. But Player 1 could have simply played $(x,y)$ at the beginning, which would lead give Player 2 the same losing position! Thus, the $m\times n$ rectangle is winning.



## Making things formal

Let $p$ be a valid board position and define $\operatorname{width}(p)$ and $\operatorname{height}(p)$ to be the width and height of the position's bounding box. We consider the empty board $E$, with $\text{width}(E) = \text{height}(E) = 0$, to be a valid position because it makes analysis easier.

Define $\mathcal{P}$ as the set of all board positions and let $\mathcal{P}_{m,n}$ be the subset of $\mathcal{P}$ for which $\text{width}(p)\leq m$ and $\text{height}(p)\leq n$. In other words, $\mathcal{P}_{m,n}$ is the set of all positions reachable during a game beginning with an $m\times n$ rectangle.

We probably should find a simple, unique representation of any board $p$. We can represent a position $p$ with $\operatorname{height}(p)=n$ as an $n$-tuple $\left(r_1, r_2, …, r_n\right)$, where $r_i$ is the number of squares on row $i$. For example, $(2, 1, 1)$ would be a little L-shaped Tetris piece. We note that the number of squares in each row monotonically decreases from bottom to top. This condition is both necessary and sufficient, so the set of tuples of positive integers which also monotonically decrease (including the empty tuple) constructs all positions.

This representation works, but to simplify things, we tack on an infinite list of zeroes to the tuples. The empty board is then $(0, 0, \dots)$, and a $2\times 3$ rectangle is $(3, 3, 0, 0, \dots)$. Now all boards are represented as a simple sequence, rather than tuples of varying lengths. You can think of this as "tuples on an infinite board".

Finally, let's define a function $\operatorname{columns}(p)$ which maps a given position to the number of columns of height $1$, height $2$, height $3$, et cetera. For example, $\operatorname{columns}(3, 3, 2, 2, 0, 0, \dots)$ is $(0, 1, 2, 0, 0, \dots)$. Note that $\operatorname{columns}(r_1, r_2, \dots)=(r_2-r_1, r_3-r_2, \dots)$.

## Observations

One important metric of a board is its total number of squares, which is $\operatorname{squares}(p)=\sum p$. The num





<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzMzI1Mjc5MzNdfQ==
-->