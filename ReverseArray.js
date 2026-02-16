function ReverseArray(arrNum) {
    var leftPointer = 0;
    var rightPointer = arrNum.length - 1;
    while (leftPointer < rightPointer) {
        var temp = arrNum[leftPointer];
        arrNum[leftPointer] = arrNum[rightPointer];
        arrNum[rightPointer] = temp;
        leftPointer++;
        rightPointer--;
    }
    return arrNum;
}
console.log(ReverseArray([1, 2, 3, 4, 5]));
