const twoSum = (
    nums,  //number[]
    target //number
) => {
    const seen ={};
    for(let i= 0; i< nums.length; i++){
        const n = nums[i];
        const k = target - n;
        if (k  in seen) {
            return [seen[k], i];
        }
        seen[n] = i;
    }
    return false;
};