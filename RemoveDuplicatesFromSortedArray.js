var removeDuplicates = function(nums) {
    var tmp = nums[0];
    var cnt = 1;

    for(var i = 1;i<nums.length;i++)
    {
        if(nums[i]>tmp)
        {
            tmp = nums[i];
            nums[cnt] = tmp;
            cnt++;
        }
    }
    return cnt;
};