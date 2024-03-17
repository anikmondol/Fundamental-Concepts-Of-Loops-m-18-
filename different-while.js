// give me the list numbers between 1 to 30 divisible by 5


// let num = 1;
// while(num <= 30){
//     if(num % 5 === 0){
//         console.log(num);
//     }
//     num++;
// }




// give me the list numbers between 1 to 30 divisible by 3 or 5


let num = 1;

// while(num <= 30){
//     if(num % 3 === 0 || num % 5 === 0){
//         console.log(num);
//     }
//     num++;
// }


// give me the list numbers between 1 to 30 divisible by 3 and 5

// while(num <= 30){
//     if(num % 3 === 0 && num % 5 === 0){
//         console.log(num);
//     }
//     num++;
// }





// give me sum of numbers from 1 to 20 that are divisible by 3


let total = 0;

while(num <= 20){
    if(num % 3 === 0){
        total += num;
    }
    num++;
}

console.log('total of number: ', total);