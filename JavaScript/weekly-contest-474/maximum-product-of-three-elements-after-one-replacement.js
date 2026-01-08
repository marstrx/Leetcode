var maxProduct = function(nums) {
    const MIN = -100000, MAX = 100000;
    nums.sort((a,b) => a-b);
    const n = nums.length;
    
    function best(arr) {
        return Math.max(
            arr[n-1] * arr[n-2] * arr[n-3],
            arr[0] * arr[1] * arr[n-1]
        );
    }
    
    let ans = best(nums);
    let arr1 = nums.slice();
    arr1[0] = MAX;               
    arr1.sort((a,b)=>a-b);
    ans = Math.max(ans, best(arr1));
    
    let arr2 = nums.slice();
    arr2[n-1] = MIN;         
    arr2.sort((a,b)=>a-b);
    ans = Math.max(ans, best(arr2));
    
    return ans;
};
