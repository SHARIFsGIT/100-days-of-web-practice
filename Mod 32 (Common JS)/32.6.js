 // closures
 function kitcher(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
 }
 const firstServer = kitcher();
 console.log(firstServer());
 console.log(firstServer());

 const secondServer = kitcher();
 console.log(secondServer());
 console.log(secondServer());

 console.log(firstServer());
 console.log(firstServer());
