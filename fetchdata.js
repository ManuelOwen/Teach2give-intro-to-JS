const fetchData = async () =>{
      try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
            throw new Error('Network response was not ok');
      }
      const data =await response.json();
      console.log(data);
      }
      catch (error){
            console.log('error fetching data'.error);
      }
}
fetchData();




// Path: INTRO%20to%20JS/Numbers.js 
`function printNumbers (){
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

}`