//mine move
const oddFibonacciNumbers = (limit) =>{
    let first = 0;
    let second = 1;
    let temp = 0;
    let oddSum = 0;

    while(first < (limit)){
        if((first%2)){
            oddSum+=first
        }
        temp = first + second
        first = second
        second = temp
    }
      
    return oddSum;

}

console.log(oddFibonacciNumbers(10**4))


// Mercenary Move_1
function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
  
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
  // test here
//  console.log( sumFibs(10**4))
