function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(N == 1) return 0;
    const string_ = N.toString();
    const stringLength = string_.length;
    return 10**(stringLength-1);
    
}
