const num=[1,2,3,4,5,6,7,8,9];
const even =num.filter((i)=>(i%2==0))
console.log("num=",num);
console.log("even=",even);
const square =even.map((i)=>(i*i))
console.log("Square=",square);
const sum = square.reduce((i,s)=>(i+s))
console.log("Sum=",sum);