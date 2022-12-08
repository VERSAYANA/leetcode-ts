function search1(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const index = Math.floor(start + (end - start) / 2);
    if (nums[index] === target) {
      return index;
    } else if (nums[index] < target) {
      start = index + 1;
    } else {
      end = index - 1;
    }
  }

  return -1;
}

function search2(nums: number[], target: number): number {
  const recursiveSearch = (start: number, end: number): number => {
    if (start > end) {
      return -1;
    }
    let middle = Math.floor((end + start) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      return recursiveSearch(start, middle - 1);
    } else {
      return recursiveSearch(middle + 1, end);
    }
  };

  return recursiveSearch(0, nums.length - 1);
}

function search3(nums: number[], target: number): number {
  let rightIndex = nums.length - 1;
  let leftIndex = 0;
  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    const middle = nums[middleIndex];
    if (middle === target) {
      return middleIndex;
    } else if (target > middle) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}
