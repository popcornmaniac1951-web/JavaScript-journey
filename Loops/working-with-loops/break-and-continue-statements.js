// A break statement is used to exit a loop early
// console.log('Break Statement');
// for (i = 0; i < 10; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log(i);
// }

// while a continue statement is used to skip the current iteration of a loop and move to the next one.
// console.log('Continue Statement');
// for(i = 0; i < 10 ; i++){
//     if(i == 4){
//         continue;
//     }
//     console.log(i);
// }

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}