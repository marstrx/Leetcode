var countElements = function(nums, k) {
   let map = new Map();

    for (let x of nums) {
        map.set(x, (map.get(x) || 0) + 1);
    }

    let unique = [...map.keys()].sort((a, b) => b - a);

    let greater = 0;
    let result = 0;

    for (let i = 0; i < unique.length; i++) {
        let v = unique[i];

        if (greater >= k) {
            result += map.get(v); 
        }

        greater += map.get(v);
    }

    return result;
}