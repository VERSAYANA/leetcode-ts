function runningSum(nums: number[]): number[] {
  const result = [nums[0]];
  let sum = nums[0]
  for(let i = 1; i < nums.length; i++) {
    sum += nums[i]
    result.push(sum);
  }

  return result;
};