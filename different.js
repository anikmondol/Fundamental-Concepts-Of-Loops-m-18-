// odd numbers

// for(let i = 1; i <= 10; i += 2){
//     console.log(i);
// }


// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }


// for(let i = 1; i <= 10; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }



// even numbers

// for(let i = 2; i <= 10; i += 2){
//     console.log(i);
// }


// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i <= 10; i++){
//     if(i % 2 !== 1){
//         console.log(i);
//     }
// }


// give me the list numbers between 1 to 30 divisible by 5


// for(let i = 1; i <= 30; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }


// give me the list numbers between 1 to 30 divisible by 3 or 5


// for(let i = 1; i <= 30; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         console.log(i);
//     }
// }


// for(let i = 1; i <= 30; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }


// give me sum of numbers from 1 to 20 that are divisible by 3

let sum = 0;

for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
       sum += i;
      
    }
}

console.log('sum of: ',sum);