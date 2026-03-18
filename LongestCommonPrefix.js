function LongestCommonPrefix(inputArr) {
    var prefix = inputArr[0];
    for (var i = 1; i < inputArr.length; i++) {
        while (!inputArr[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
}
console.log(LongestCommonPrefix(["flower", "flow", "flight"]));
console.log(LongestCommonPrefix(["dog", "racecar", "car"]));
