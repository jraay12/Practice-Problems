function SumEvenNumbers1(arrNum: number[]): number{
  let count = 0
  for(let i = 0; i < arrNum.length; i++){
    if (arrNum[i] % 2 == 0){
      count+=arrNum[i]
    }
  }

  return count
}

console.log(SumEvenNumbers1([7, 11, 8, 10]))