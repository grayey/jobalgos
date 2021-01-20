function sumPalindromes(limit){
     
    // single digit numbers are  palindromes?!
    let palindromesSum = 0;
    for(let i=0; i<limit; i++){
        const string_ = i.toString();
        const stringArray = string_.split('');
        if(stringArray.join('') == stringArray.reverse().join('')){
            palindromesSum+=i;
        }
    }

    return palindromesSum

 }

 console.log(sumPalindromes(10**4))
