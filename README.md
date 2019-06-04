# WUIF1904-Practice-circulate

> 第一题   
 操场上100多人排队，三人一组多1人，四人一组多2人，五人一组多3人，共多少人？  (118   178)
 ```
 for(let i=100;i<200;i++){
    if((i%3==1)&&(i%4==2)&&(i%5==3)){
        document.write(i)
        document.write("<br>")
    }
}
 ```
 > 第二题  
 甲、乙、丙、丁四人共加工零件370个，如果把甲做的个数加10个，乙做的个数减20个，丙做的个数乘以2，丁做的个数除以2，四人做的零件数正好相等，求甲实际加工了多少个零件 (70)  
 ```
 for(let a=0;a<370;a++){
    if(a+(a+10+20)+((a+10)/2)+((a+10)*2)==370){
        document.write(a)
        document.write("<br>")
    }
}
 ```
 > 第三题  
 从1到500所有自然数中不含数字4的自然数共有多少个？(324)
 ```
let c=0;
for(let b=500;b>=1;b--){
    if(parseInt(b/100)!=4&&parseInt(b%100/10)!=4&&parseInt(b%10)/4!=1){
        c++
    }
}
document.write(c)
document.write("<br>")
 ```
 > 第四题  
 两个自然数X，Y相除，商3余10，被除数、除数、商、余数的和是163，求被除数、除数。(115,35) 
 ```
 for(let i=0;i<163;i++){
    for(j=0;j<163;j++){
        if((i+j+13==163)&&(j*3+10==i)){
            document.write(i+","+j)
        }
    }
}
 ```
 > 第五题  
  某数学竞赛中，参赛人数大约在380~450人之间。比赛结果，全体考生的总平均分为76分，男生的平均分为75分，女生的平均分为80.1分，求男女生各有多少人？(328，80)
  ```
  for(let i=1;i<450;i++){
    for(let j=380-i;j<(450-i);j++){
        if((75*j+80.1*i)==76*(i+j)){
            document.write(i+","+j)
        }
    }
}
  ```
  > 第六题  
  一个四位数，恰好等于去掉它的首位数字之后所剩的三位数的3倍，这个四位数是多少？(1500)  
  ```
  for(let a=1000;a<=9999;a++){
    if(a==(a%1000*3)){
        document.write(a)
    }
}
  ```
  > 第七题  
  有一个两位数，如果在它的前面添一个3，可得到一个三位数；把3添在它的后面，也可以得到一个三位数。这两个三位数相差468，求原来的两位数。（85）
  ```
  for(let a=10;a<100;a++){
    if(a+300+468==a*10+3){
        document.write(a)
    }
}
  ```
 > 第八题  
一个六位自然数，将其末位上数字7移至首位，其余数字依次向右移动一位，得到一个新的六位数，新的六位数是原六位数的4倍，求原数。 (179487)  
```
for(let a=100000;a<1000000;a++){
    if((parseInt(a/10)+7*100000)==a*4){
        document.write(a)
    }
}
```
> 第九题  
要在[ ]、[ ]7、[ ]48这三个数中的每个[ ]内各填上1~9中的一个数字，使中间的两位数是左边的一位数和右边的三位数的平均数，求这三个数。（6、77、148）  
```
for(let a=1;a<10;a++){
    for(let b=1;b<10;b++){
        for(let c=1;c<10;c++){
            if((a+c*100+48)/2==b*10+7){
                document.write(`${a},${b*10+7},${c*100+48}`)
             }
        }
    }
}
```
> 第十题  
有红、白、黑三种球若干个，其中红、白球共25个，白、黑球共31个，红、黑球共28个，求这三种球各多少个？（11、14、17）  
```
for(let a=0;a<=25;a++){
    if((25-a)+(28-a)==31){
        // document.write(a+"个红球，"+25-a+"个白球,"+28-a+"个黑球")
        document.write(a+"个红球")
        document.write("<br>")
        document.write(25-a+"个白球,")
        document.write("<br>")
        document.write(28-a+"个黑球,")
    }
}
```
> 第十一题  
某人去购买教材和练习簿。已知教材每本10元，教参每本5元，练习簿每本0。5元，他总共购买了100本，用了100元。问他购买教材、教参和练习簿各多少本？（1、9、90）
```
for(let a=0;a<100;a++){
    for(let b=0;b<100;b++){
        for(let c=0;c<100;c++){
            if((a+b+c==100)&&(a*10+b*5+c*0.5==100)){
                document.write(a +',' +b +',' +c)
            }
        }
    }

}
```
> 第十二题  
输出四位自然数中各位数字之和为6并且各位数字互不相同的数，并统计个数。（1023、1032、1203、1230、1302、1320、……、3201、3210，18）  
```
let e=0
for(let a=1;a<10;a++){
    for(let b=0;b<10;b++){
        for(let c=0;c<10;c++){
            for(let d=0;d<10;d++){
                if((a+b+c+d==6)&&(a!=b)&&(a!=c)&&(a!=d)&&(b!=c)&&(b!=d)&&(c!=d)){
                    document.write(a,b,c,d)
                    document.write("<br>")
                    e++
                }
            }
        }
    }

}
document.write("<br>")
document.write(e)
```
> 第十三题  
由数字1、2、3、4、5、6六个数字共可组成多少个没有重复数字的四位数，输出这些数据并统计个数。（1234、1235、1236、1243、1245、1246、1253、……、6542、6543，S=360）  
```
let e=0
for(let a=1;a<=6;a++){
    for(let b=1;b<=6;b++){
        if(a==b){
            continue
        }
        for(let c=1;c<=6;c++){
            if(b==c||a==c){
            continue
            }
            else{
                for(let d=1;d<=6;d++){
                    if(a==d||b==d||c==d){
                        continue
                    }
                    document.write(a,b,c,d)
                    document.write(",")
                    e++
                }

            }

        }
      
    }
}

document.write("<br>")
document.write(e)
```
> 第十四题  
将100元纸币兑换成10元、5元和1元纸币共20张，输出各种兑换法，并统计个数。（4、11，5；8、2、10；S=2） 
```
let num=0;
for(let a=0;a<=20;a++){
    for(let b=0;b<=20;b++){
        for(let c=0;c<=20;c++){
            if((a+b+c==20)&&(a*10+b*5+c*1==100)){
                document.write(a+"张10元，"+b+"张5元，"+c+"张1元")  
                document.write("<br>")
                num++
            }
        }
    }
}
document.write("<br>")
document.write(num)
```
> 第十五题  
 打印“＊”字三角形：从键盘输入一个自然数Ｎ（１《Ｎ《 ９）。根据Ｎ的值，打印输出对应的“＊”字三角形。如Ｎ＝４，输出  
 ```
 let n
n=prompt("请输入一个1到9的数字") 

for(let i=0;i<=n;i++){
    for(let j=n-i;j>0;j--){
        document.write("&nbsp")
    }
    for(let a=0;a<(2*i-1);a++){
        document.write("*")
  
    }
    document.write("<br>")
}
 ```
 > 第十六题  
 打印“＊”字三角形：从键盘输入一个自然数Ｎ（１《Ｎ《 ９）。根据Ｎ的值，打印输出对应的“＊”字三角形。如Ｎ＝４，输出
```
let n
n=prompt("请输入一个1到9的数字") 

for(let i=0;i<=2*n-1;i++){
    if(i<=n){
        for(let j=n-i;j>0;j--){
            document.write("&nbsp")
        }
        for(let a=0;a<(2*i-1);a++){
            document.write("*")
      
        }
        document.write("<br>")

    }
    else{
        
        document.write("&nbsp")    
        for(let a=0;a<(i-2*(i-n))*2-1;a++){
            document.write("*")
      
        }
        document.write("<br>")

    }
}
```
> 第十七题  
把16题中的菱形变为空心的  
```
let n
n=prompt("请输入一个1到9的数字") 

for(let i=0;i<=2*n-1;i++){
    if(i<=n){
        for(let j=n-i;j>0;j--){
            document.write("&nbsp")
        }
        for(let a=0;a<(2*i-1);a++){
            if(a==0||a==(2*i-2)){
                document.write("*")
            }
            else{
                document.write("&nbsp") 
            }
        }
        document.write("<br>")

    }
    else{
        
        document.write("&nbsp")    
        for(let a=0;a<(i-2*(i-n))*2-1;a++){
            if(a==0||a==(i-2*(i-n))*2-2){
                document.write("*")
            }
            else{
                document.write("&nbsp") 
            }
      
        }
        document.write("<br>")

    }
}
```

