function CountVowels1(str1: string) : number {
  const cleanStr = str1.replace(/\s+/g, '').toLowerCase();

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0

  for(let i = 0; i < cleanStr.length; i++){
    if(vowels.includes(cleanStr[i])){
      count++
    }
  }

  return count
}


console.log(CountVowels1("hello world"))