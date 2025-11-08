var findTheDifference = function(s, t) {
    const sArr = s.split('');
    for (let char of t) {
        const index = sArr.indexOf(char);
        if (index === -1) {
            return char;
        } else {
            sArr.splice(index, 1);
        }
    }
}

console.log(findTheDifference("mar","mare"));
