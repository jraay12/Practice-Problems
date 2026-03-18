function romanToInteger(input: string): number {
  const symbol: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  
  for (let i = 0; i < input.length; i++) {
    const current = symbol[input[i]]
    const next = symbol[input[i + 1]]

    if (next && current < next){
      sum -= symbol[input[i]]
    }else {
      sum += symbol[input[i]];
    }
    
  }

  return sum
}


console.log(romanToInteger("III"))
console.log(romanToInteger("LVIII"))
console.log(romanToInteger("MCMXCIV"))
