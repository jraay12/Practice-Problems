function NonRepeatingCharacter(s: string) : any {
    let character: { [key: string]: number } = {};

    for(let i = 0; i < s.length; i++){
        character[s[i]] = (character[s[i]] || 0) + 1
    }
    
    for(let i = 0; i < s.length; i++){
        if (character[s[i]] === 1){
            return s[i]
            
        }
    }
    
    return null
    
}

console.log(NonRepeatingCharacter("lleettccooddee"))