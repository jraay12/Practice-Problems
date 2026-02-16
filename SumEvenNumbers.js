function SumEvenNumbers(arrNum) {
    var count = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 == 0) {
            count += arrNum[i];
        }
    }
    return count;
}
console.log(SumEvenNumbers([7, 11, 8, 10]));
