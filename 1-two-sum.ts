function twoSum(nums: number[], target: number): number[] {
    let numsMap = new Map<number, number>();
    numsMap.set(nums[0], 0)
    for (let i = 1; i < nums.length; i++) {
        if (numsMap.has(target - nums[i])) {
            return [numsMap.get(target - nums[i]), i]
        }
        numsMap.set(nums[i], i)
    }
};

function twoSum2(nums: number[], target: number): number[] {
    let numsMap = new Map<number, number>();
    numsMap.set(nums[0], 0)
    for (let i = 1; i < nums.length; i++) {
        const difIndex = numsMap.get(target - nums[i])
        if (difIndex !== undefined) {
            return [difIndex, i]
        }
        numsMap.set(nums[i], i)
    }
};