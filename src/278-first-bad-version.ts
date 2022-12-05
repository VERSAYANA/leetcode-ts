/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution1 = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;
    if (isBadVersion(1)) {
      return 1;
    }
    while (left < right) {
      let middle = Math.floor(left + (right - left) / 2);
      if (isBadVersion(middle) === true) {
        if (isBadVersion(middle - 1) === false) {
          return middle;
        }
        right = middle - 1;
      } else {
        if (isBadVersion(middle + 1) === true) {
          return middle + 1;
        }
        left = middle + 1;
      }
    }
  };
};

const solution2 = function (isBadVersion: any) {
  return function (n: number): number {
    let start = 1;
    let end = n;

    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};
