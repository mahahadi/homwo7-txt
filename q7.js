var a=2;//for example
var b=4;
var c=-2;
var d=-4;
var e=10;
var i=0;



if(a%2==0){
  document.write("Blue");i++;
}
if(b%2===0&&c>5){
  document.write("Green");i++;
}
if(b%2===0&&c<5){
  document.write("Yellow");i++;
}
if(a%2===0&&b%2===0&&c<0){
  document.write("Orange");i++;
}
if((c+d+e)>(a+c)){
  document.write("Purple");i++;
}
if(i==2&&(c%2!==0||c<b)){
  document.write("Red");
}