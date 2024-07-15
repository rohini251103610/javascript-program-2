1. //FIZZ BUZZ
let num=100;
for(i=0;i<=num;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("FizzBuzz");
    }
    else if(i%3==0)
    {
        console.log("Fizz");
    }
    else if(i%5==0){
    console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}

//2.Palindrome
function pali(str)
{
    let str1="";
    let i;
    for (i=str.length-1;i>=0;i--){ 
        str1 += str[i];
    }
    if(str==str1){
        return "Palindrome";
    }
    else{
        return "Not Palindrome";
    }
}
console.log(pali("MADAM"));


   //3.Array
   
   function array(a){
    let n=0;
    for(let i=0;i<a.length;i++){
       if (a[i]>=n){
           n=a[i];
        }
     }
     return n;
   }
       const arr=[2,38,90,25,45];
  console.log(array(arr));



// // 7.Temperature converts celsius
   function temperature(celsius){
return(9/5)*celsius+32;
   }
console.log(temperature(38));


//6.factorial

function f(a){
    let i;
       let f1=1;
  for(i=1;i<=a;i++)
   {        f1=f1*i;
  }
     return(f1);
 }
console.log(f(5));


//5.longest String

function names(str){
    str=str=str.split(" ")
    return str.sort((a,b)=>b.length-a.length)[0];
}
console.log(names("Hello Friends"));

//4.

 function occ(l){
     let result={}
    for(let m=0;m<l.length;m++){
         let ch=l.charAt(m)
    
   if(!result[ch])
        result[ch]=1;
    else
       result[ch]+=1
   } 
   return result;

}
 console.log(occ("Hello guys"));

 //8.array
let array=[0,1,4,5,2,6,7];
let x=array.length;
let sum1=0;
let w;
for(w=0;w<=x;w++){
    sum1=sum1+w;
}
let sum=0;
 let q;
 for(q=0;q<x;q++){ 
   sum=sum+array[q];
 }

console.log(sum1-sum)


