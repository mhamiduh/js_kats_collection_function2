
function add (a,b){
    return (a+b);
}
console.log(add(4,7));



let numberAdd = add(10,9)
console.log (numberAdd);





function multiply(a,b){
    let count = 0;
    let answer = 0;
    while (count < b){
        answer = add(a,answer)
    count++
    }
    return answer
    }
    console.log(multiply(8,5));
    
    
    
    function square(a,b){
        return (a**b)
    }
    console.log(square(2,4));


    
    function power(a,b){
        let count = 0;
        let answer = 1;
        while (count < b){
            answer = multiply(a,answer)
        count++
        }
        return answer
        }
        console.log(power(2,8));


        
        function fibonacci(a){
            let count = 0;
            let answer = 0;
            while (count<a){
                answer = add(a,answer)
            count++
            }
            return answer
            }  
            console.log(fibonacci(4));



         let fibonacci_series = function (n) 
         {
         if (n===1) 
         {
         return [0, 1];
         } 
         else
         {
        let s = fibonacci_series(n - 1);

        s.push(s[s.length - 1] + s[s.length - 2]);
         return s;
         }
        };
         console.log(fibonacci_series(8));
 
        
        
        //function square(a,b){
          //  return (a**b)
          //}
       // console.log(square(2,4))


    //function multiply (a,b,c,d){
    //    return (a*b*c*d);
    //}
    //console.log(multiply(2,2,3,2));