console.log("Hello from Miguel at " + Date());



//z = x+y 
/*
parseFloat('x.value');

parseFloat('y.value');

x.size=5; (changes the size of the box)


*/

x.size=y.size=10;
x.onkeyup=y.onkeyup= function(ev){
    z.textContent=parseFloat(x.value)+ parseFloat(y.value);
    };

x.onkeypress = function(){firstName.textContent ="no"};

listCancers=function(id){
    if(!id){console.warn('id not defined')}
    else{
        cbio.get(
            null,
            function(x){
                var div = document.getElementById(id)
                var h = ''
                x.forEach(function(xi, i){
                   if(i==0){
                     h +='<h2>' + xi + '</h2>'
                   }else {
                     h +='<li>' + xi + '</li>'
                   }    
                   })
                   
                div.innerHTML=h

                   }
                )
    }
}                


       
   

listCancers('cancerTypesDiv')