function minCostClimbingStairs(cost: number[]): number {
  const dp = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
  }

  return Math.min(dp[cost.length - 2], dp[cost.length - 1]);
}

function minCostClimbingStairs2(cost: number[]): number {
  let c0 = cost[0];
  let c1 = cost[1];

  for (let i = 2; i < cost.length; i++) {
    [c0, c1] = [c1, Math.min(c0, c1) + cost[i]];
  }

  return Math.min(c0, c1);
}
