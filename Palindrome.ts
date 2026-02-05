function Palindrome(s: string): any {
    
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let leftPointer = 0
    let rightPointer = cleanedString.length - 1
    
    while (leftPointer < rightPointer){
        if (cleanedString[leftPointer] !== cleanedString[rightPointer]){
            return false
        }else {
            leftPointer++
            rightPointer--
        }
    }
    
    
    
    return true
}

console.log(Palindrome("A man, a plan, a canal: Panama"))