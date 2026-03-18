function TwoSum(numarr, target) {
    for (var i = 0; i < numarr.length; i++) {
        for (var j = i + 1; j < numarr.length; j++) {
            if (numarr[i] + numarr[j] === target) {
                return [i, j];
            }
        }
    }
    return undefined;
}
console.log(TwoSum([2, 7, 11, 15], 9));
