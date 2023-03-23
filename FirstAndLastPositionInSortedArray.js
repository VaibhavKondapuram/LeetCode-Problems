var searchRange = function(nums, target) {
    let left=0,right=nums.length-1;
let low=-1,high=-1
while(left<=right){
const mid=left+Math.floor((right-left)/2);
if(nums[mid]>=target) right=mid-1
else left=mid+1;
}
low=left
left=0;right=nums.length-1
while(left<=right){
const mid=left+Math.floor((right-left)/2);
if(nums[mid]>target) right=mid-1
else left=mid+1;
}
high=right
return low<=high ? [low,high] : [-1,-1]
};