var a=[2,17, 24, 4, 26, 19, 30, 66, 40];
var odd_Number=[];
var even_Number=[];

var array_length=a.length;
var position=0;
var odd_indx=0;
var even_indx=0;
var min_odd;
var min_even;

// for intiat min and even value to cancel any array arrangement problem
while (position<array_length){
  if(isOdd(a[position])===true)  min_odd=a[position];
  else min_even=a[position];
position++;
}position=0;


while (position<array_length){
  if(isOdd(a[position])===true){
    odd_Number[odd_indx]=a[position]; odd_indx++;
    if(a[position]<min_odd)  min_odd=a[position];
  }
  
  else{
    even_Number[even_indx]=a[position]; even_indx++;
    if (a[position]<min_even)  min_even=a[position];
  }
  
  position++;
}
document.write("The array is a[]=",a); 
document.write("odd List =",odd_Number,"\nmin odd No=",min_odd);
document.write("even List =",even_Number,"\nmin even No=",min_even);
 
 function isOdd(value){
   if ((value%2)!==0)
    return true;
    else return false;
   
 }
