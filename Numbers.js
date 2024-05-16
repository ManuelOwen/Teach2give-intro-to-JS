function printNumbers (){
      for ( let i = 0; i <=100;  i++){
            if ( i % 2 === 0)
                  console.log( i + 'is even')
            else if (i % 3 ===0){
            
                   console.log( i +'is odd')
            } else {
                  let  isprime  = true;
                  for ( let j = 2; j  <= Math.sqrt(i); j ++)
                  if ( i % j ===0 ) {
                        isprime = false;
                        break;
                  }
                       if (isprime && i > 1)
                        console.log(i + 'is prime')
                         
            }
            
      }

}
printNumbers();

 
// function printNumbers() {
//       for (let i = 0; i <= 100; i++) {
//           if (i % 2 === 0) {
//               console.log(i + ' is even');
//           } else if (i % 3 === 0) {
//               console.log(i + ' is odd');
//           } else {
//               let isPrime = true;
//               for (let j = 2; j <= Math.sqrt(i); j++) {
//                   if (i % j === 0) {
//                       isPrime = false;
//                       break;
//                   }
//               }
//               if (isPrime && i > 1) {
//                   console.log(i + ' is prime');
//               }
//           }
//       }
//   }
  
//   printNumbers();
  
