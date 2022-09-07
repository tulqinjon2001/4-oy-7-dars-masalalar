/* ----------------Problem 1--------------- */


// let progress = function(d, n) {
//   for(let i = d; i <= n * d; i+= d) {
//     console.log(i);
//   }
// }
// progress(5, 10);



/* ----------------Problem 2--------------- */



// let array2 = [];

// let progress2 = (a, b) => {
//   if(a < b) {
//     for(let i = a; i <= b; i++) {
//       array2.push(i);
//     }
//   } else {
//     for(let i = b; i <= a; i++) {
//       array2.push(i);
//     }
//   }
// }
// progress2(2, 5);

// console.log(array2);


/* ----------------Problem 3--------------- */


// let progress3 = (num) => console.log(Math.ceil(num/100));
// progress3(1601);


/* ----------------Problem 4--------------- */ 


var max = 0;

let maxMultiple = function(a, b) {
  for(let i = a; i <= b; i++) {
    if (i % a == 0) {
      max = i;
    }
  }
  console.log(`Max multiple ${max}`);
}
maxMultiple(37, 200);