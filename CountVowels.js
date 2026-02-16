function CountVowels(str1) {
    var cleanStr = str1.replace(/\s+/g, '').toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for (var i = 0; i < cleanStr.length; i++) {
        if (vowels.includes(cleanStr[i])) {
            count++;
        }
    }
    return count;
}
console.log(CountVowels("hello world"));
