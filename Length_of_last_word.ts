function length_of_last_word(str1: string): number {
    let cleanStr = str1.trim().split(" ");
    let lastString = cleanStr[cleanStr.length - 1];
    return lastString.length;
}

console.log(length_of_last_word("   fly me   to   the moon  "))