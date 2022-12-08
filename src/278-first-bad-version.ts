/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;
    while (left <= right) {
      let middle = Math.floor(left + (right - left) / 2);
      const isMiddleBadVersion = isBadVersion(middle);
      if (isMiddleBadVersion && !isBadVersion(middle - 1)) {
        return middle;
      } else if (isMiddleBadVersion) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return -1;
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
