To find the number of unique paths from the top left to the bottom right of an `m` by `n` grid, we need to move `m - 1` times down and `n - 1` times right. Imagine we represent these movements with the letters **R** and **D**, then any permutation of these letters will be a unique path. To calculate the number of possible permutations, we need to use the formula for permutations with repetition (becasue we have repeating letters):

$ \frac{\left(m + n - 2\right)!}{\left(m - 1\right)! \cdot \left(n - 1\right)!} $

The following solution to the problem is clear and straightforward. We define a helper function that calculates the factorial of a given number. In the main function, we use this helper function to calculate the number of unique paths according to the specified formula.

```ts
function uniquePaths(m: number, n: number): number {
  return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
}

function factorial(num: number): number {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
```

Time complexity: $$O(m + n)$$ Space complexity: $$O(1)$$

---

Even though the previous solution has a good time and space complexity, it has one drawback. We are not making use of the fact that $$x! = x * (x - 1)!$$, which means that we are performing many unnecessary calculations by calculating each factorial independently from the start.

To avoid repeating the same multiplications, we can use an array to store the previously calculated factorials:

```ts
function uniquePaths(m: number, n: number): number {
  const factorial = [1, 1];
  for (let i = 2; i <= m + n - 2; i++) {
    factorial[i] = i * factorial[i - 1];
  }
  return factorial[m + n - 2] / (factorial[m - 1] * factorial[n - 1]);
}
```

Time complexity: $$O(m + n)$$ Space complexity: $$O(m + n)$$

The downside to this approach is that we are using more space, we are increasing the space complexity to $$O(m + n)$$

---

To avoid repeating calculations without increasing the space complexity, we first calculate the factorial of the smaller side of the grid (the letter with less frequency). Then, we use that value to calculate the factorial of the bigger side of the grid (the letter with more frequency). Finally, we use that value to calculate the factorial of `m + n - 2`, which is the largest factorial we need to calculate.

With this approach, we take advantage of the fact that $$x! = x * (x - 1)!$$ without using more space.

```ts
function uniquePaths(m: number, n: number): number {
  const smallerSide = Math.min(m, n);
  const biggerSide = Math.max(m, n);

  let denominator1 = 1;
  for (let i = 1; i <= smallerSide - 1; i++) {
    denominator1 *= i;
  }

  let denominator2 = denominator1;
  for (let i = smallerSide; i <= biggerSide - 1; i++) {
    denominator2 *= i;
  }

  let numerator = denominator2;
  for (let i = biggerSide; i <= m + n - 2; i++) {
    numerator *= i;
  }

  return numerator / (denominator1 * denominator2);
}
```

Time complexity: $$O(m + n)$$ Space complexity: $$O(1)$$
