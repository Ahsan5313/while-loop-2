var x=2;
sum=0;
while (x<=100) {
   if(x%4==0&&x%8==0){
      document.write(" "+x);

      sum=sum+x
   }
     x=x+2;
    
}
document.write(" Result ="+sum);
