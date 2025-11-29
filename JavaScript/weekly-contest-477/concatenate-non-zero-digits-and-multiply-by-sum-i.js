var sumAndMultiply = function (n) {
    if (n === 0) return 0;

    let xStr = "";
    let temp = n;

    while (temp > 0) {
        const digit = temp % 10;
        if (digit !== 0) {
            xStr = digit + xStr;
        }
        temp = Math.floor(temp / 10);
    }

    if (xStr === "") return 0;

    const x = parseInt(xStr, 10);

    let sum = 0;
    let tempX = x;

    while (tempX > 0) {
        sum += tempX % 10;
        tempX = Math.floor(tempX / 10);
    }

    return x * sum;
};
