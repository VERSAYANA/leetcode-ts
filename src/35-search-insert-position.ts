function searchInsert1(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  if (target > nums[right]) {
    return right + 1;
  }

  if (target < nums[0]) {
    return 0;
  }

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      if (nums[middle + 1] > target) {
        return middle + 1;
      }
      left = middle + 1;
    } else {
      if (nums[middle - 1] < target) {
        return middle;
      }
      right = middle - 1;
    }
  }
}

function searchInsert2(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return left;
}

searchInsert2([1, 3, 5, 6], 5);
