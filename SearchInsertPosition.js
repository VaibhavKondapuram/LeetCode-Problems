var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    if (target < nums[0]) {
        return 0
    } else if (target > nums[end]) {
        return end + 1
    }
    while(start<= end){
        let mid = Math.floor((start+end)/2)
        if(target < nums[mid]){
            end = mid-1
        }else if(target>nums[mid]){
            start = mid + 1;
        }else{
            return mid
        }
    }
    return start


    // for(let i = 0; i<nums.length; i++){
    //     if(target<=nums[i])
    //     return i
    // }
    // return nums.length
};