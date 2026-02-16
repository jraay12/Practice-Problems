function NonRepeating1(str: string): any {
  let words: any = {}

  for(let i = 0; i < str.length; i++){
    words[str[i]] = (words[str[i]] || 0) + 1
  }

  for(let i = 0; i < str.length; i++){
    if (words[str[i]] === 1){
      return str[i]
    }
  }
}

console.log(NonRepeating1("leetcode"))