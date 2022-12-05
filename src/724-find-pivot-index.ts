function pivotIndex(nums: number[]): number {
  // Map index to sum of numbers at index
  const sumMap = new Map<number, number>();
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    sumMap.set(i, sum);
  }

  for (let i = 0; i < nums.length; i++) {
    const leftSum = sumMap.get(i) - nums[i];
    const rightSum = sum - sumMap.get(i);
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

function pivotIndex2(nums: number[]): number {
  let sum = 0;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    const rightSum = sum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}
