var findMissingElements = function(nums) {
    let sortedList = nums.sort((a,b)=>a-b);
    let allElem =[];
    let missEll =[];
    let min = Math.min(...sortedList);
    let max = Math.max(...sortedList);
    for (let i = min ; i<=max ; i++){
        allElem.push(i);
    }

    for(let i=0 ; i< allElem.length ; i++){
        if(!nums.includes(allElem[i])){
            missEll.push(allElem[i]);
        }
    }
    return missEll;
};

console.log(findMissingElements([1,4,2,5]))