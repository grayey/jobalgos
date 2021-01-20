const romanize = (num) => {
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
  
    let romanized = "";
  
    for (let index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
      }
    }
  
    return romanized;
  };

 


 function romanLegionaries(limit){
    let start = 9;
     if(limit < start) return 0;
     let noOfXs = 0;
     while(start <= limit){
        let roman = romanize(start);
        start++;
        if(!roman.includes('X')){
            continue;
        }
        noOfXs += roman.split('').filter(r => r=='X').length;

     }

     return noOfXs;
 }


 
  

 console.log(romanLegionaries(2660))