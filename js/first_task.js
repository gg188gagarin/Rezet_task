let o=Number(prompt('Введите ваш массив'));
let a,b,c,t,t2;
t=0;
t2=o;


while ( t2 > 100  )  {
    c = t2 % 10;
    b = t2 % 100;
    a = (t2 % 1000-b)/100;
    b = (t2 % 100-c)/10;
    t=c*10+t;
    t2= (t2-c)/10;

    if (b>a)
        if (b>c)
            document.write( '1' )
        else document.write( '0' )
    else if (c>b)
        document.write( '1' )
    else document.write( '0' )
};