var lexicalOrder = function(n) {
    const allNumbers =[];

    for (let i =1 ;i<= n ;i++){
        allNumbers.push(i);
    }
    return allNumbers.sort();
}

console.log(lexicalOrder(10));
