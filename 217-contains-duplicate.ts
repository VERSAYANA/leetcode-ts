function containsDuplicate1(nums: number[]): boolean {
  const numsSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numsSet.has(nums[i])) {
      return true;
    } else {
      numsSet.add(nums[i]);
    }
  }
  return false;
}

function containsDuplicate2(nums: number[]): boolean {
  const numsSet = new Set(nums);
  return numsSet.size !== nums.length;
}
