function ReverseArray1(arrNum: number[]): number[]{
 
  let leftPointer = 0
  let rightPointer = arrNum.length - 1

  while (leftPointer < rightPointer){
    let temp = arrNum[leftPointer]
    arrNum[leftPointer] = arrNum[rightPointer]
    arrNum[rightPointer] = temp

    leftPointer++
    rightPointer--
  }

  return arrNum


}

console.log(ReverseArray([1, 2, 3, 4, 5]));
