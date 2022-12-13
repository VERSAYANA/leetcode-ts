function climbStairs(n: number): number {
  const dp = [1, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
}

function climbStairs2(n: number): number {
  if (n <= 1) return 1;
  let n1 = 1;
  let n2 = 1;

  for (let i = 2; i <= n; i++) {
    [n1, n2] = [n2, n1 + n2];
  }

  return n2;
}
