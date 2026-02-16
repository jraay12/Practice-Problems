function ReveserString1(s1: string[]) : string[]{
  
  let leftPointer = 0
  let rightPointer = s1.length - 1

  while (s1[leftPointer] < s1[rightPointer]){
    let temporaryValue = s1[leftPointer]
    s1[leftPointer] = s1[rightPointer]
    s1[rightPointer] = temporaryValue

    leftPointer++
    rightPointer--
  }

  return s1
}

console.log(ReveserString1(["h","e","l","l","o"]))