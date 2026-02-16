function ReveserString(s1) {
    var leftPointer = 0;
    var rightPointer = s1.length - 1;
    while (s1[leftPointer] < s1[rightPointer]) {
        var temporaryValue = s1[leftPointer];
        s1[leftPointer] = s1[rightPointer];
        s1[rightPointer] = temporaryValue;
        leftPointer++;
        rightPointer--;
    }
    return s1;
}
console.log(ReveserString(["H","a","n","n","a","h"]));
