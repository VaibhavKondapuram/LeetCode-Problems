var maxSubArray = function(nums) {
    let sum = 0 //taking a sum to sum up elements from nums
    let maxSum = -Infinity   //initializing the max sum
    for(let ele of nums){  //looping through the array nums
        sum = sum + ele  // summing up with each element
        maxSum = Math.max(maxSum, sum)  //keeping the maximum sum in a value
        if(sum < 0) sum = 0  // if at any iteration, the sum becomes less than 0, make thae sum as 0
    }
    return maxSum  //return the maxSum
};