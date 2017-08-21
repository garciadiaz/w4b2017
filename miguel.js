console.log("Hello from Miguel at " + Date());



//z = x+y 
/*
parseFloat('x.value');

parseFloat('y.value');

x.size=5; (changes the size of the box)


*/

x.size=y.size=10;
x.onkeyup=y.onkeyup= function(ev){
    z.textContent=parseFloat('x.value')+ parseFloat('y.value');
    };