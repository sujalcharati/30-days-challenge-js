// task1
for(i=1;i<=10;i++){
    console.log(i)
}
// task2
for(i=1;i<=10;i++){
    console.log(5*i)
}
// task3
num = 1;
sum =0;
while(num <=10){
    sum+=num;
    num+=1;
}
console.log(sum);
// task4
i=10;
while(i>=1){
    console.log(i)
    i--;
}
// task5
i=1
do{
    console.log(i)
    i++;
}
while(i<=5);
// task6
num=4;
fact=1;
do{
fact=num*fact;
num-=1;
}
while(num >=1);
console.log(fact);
// task7
 n=5;
 String="";
 for(i=1;i<=n;i++){
    for(j=0;j<i;j++){
        String+="*"
    }
    String+="\n"

 }
 console.log(String);
//  task8
i=1
for(i=1;i<=10;i++){
    if(i==5)
        continue;
    console.log(i);
}
// task9
i=1
for(i=1;i<=10;i++){
    if(i==7)
        break;
    console.log(i);
}






