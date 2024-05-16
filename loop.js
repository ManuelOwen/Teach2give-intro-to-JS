// function drawTriangle(height){
//       for (let i=1; i<=height; i++) {
//             let row ='';

//             for (let j  =1; j <=i; j++){
//                   row +='*'
//             }
//             console.log(row) 
//       }
// }
// let height =5;
function drawTriangle(height) {
      for (let i = 1; i <= height; i++) {
          let row = '';
          // Adding spaces to center the triangle
          for (let j = 0; j < height - i; j++) {
              row += ' ';
          }
          for (let k = 1; k <= 2 * i - 1; k++) {
              row += '*';
          }
          console.log(row);
      }
  }
  