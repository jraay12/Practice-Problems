function anagram(s: string, t: string): boolean{
    
    if (s.length !== t.length){
        return false
    }
    
    const reversedFirstString = s.split("").sort().join("")
    const reversedSecondString = t.split("").sort().join("")
    
    if (reversedFirstString !== reversedSecondString){
        return false
    }


    return true
    
}

console.log(anagram("rat", "car"))
