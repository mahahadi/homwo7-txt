var a=[2,17, 24, 4, 26, 19, 30, 66, 40];
var odd_array=[];
var even_array=[];

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
    odd_array[odd_indx]=a[position]; odd_indx++;
    if(a[position]<min_odd)  min_odd=a[position];
  }
  
  else{
    even_array[even_indx]=a[position]; even_indx++;
    if (a[position]<min_even)  min_even=a[position];
  }
  
  position++;
}

document.write("The array is a[]=",a); 
document.write("odd List =",odd_array,"\nmin odd No=",min_odd);
document.write("even List =",even_array,"\nmin even No=",min_even);
odd_array=sort(odd_array);
document.write("odd List =",odd_array);
odd_array=reverse(odd_array);
document.write("odd List =",odd_array);
even_array=sort(even_array);
document.write("even List =",even_array);
even_array=reverse(even_array);
document.write("even List =",even_array);
function sort(s_array){
   var s_length=s_array.length;
   var T=s_array[0];
   var Tp=0;
   var p=0;
   while(Tp<s_length-1){
     p=Tp+1;
     while(p<s_length){
       if(s_array[Tp]>s_array[p]){
        T=s_array[Tp];
        s_array[Tp]=s_array[p];
        s_array[p]=T;
       }p++;
      }Tp++;
   }
   return s_array;
 }
function reverse(r_array){
   var r_length=r_array.length;
   var T=r_array[0];
   var Tp=0;
   var p=0;
   while(Tp<r_length-1){
     p=Tp+1;
     while(p<r_length){
       if(r_array[Tp]<r_array[p]){
        T=r_array[Tp];
        r_array[Tp]=r_array[p];
        r_array[p]=T;
       }p++;
      }Tp++;
   }
   return r_array;
}
 
 function isOdd(value){
   if ((value%2)!==0)
    return true;
    else return false;
   
 }
