function NonRepeating(str) {
    var words = {};
    for (var i = 0; i < str.length; i++) {
        words[str[i]] = (words[str[i]] || 0) + 1;
    }
    for (var i = 0; i < str.length; i++) {
        if (words[str[i]] === 1) {
            return str[i];
        }
    }
}
console.log(NonRepeating("leetcode"));
