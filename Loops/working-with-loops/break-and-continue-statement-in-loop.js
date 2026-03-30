// The break statement is usefull when you need to exit a loop early based on a certain condition.example if you 
// are searching for a specific value in an array ,you can use a break statement to exit the loop once you find the value.

for(i = 0 ; i < 10 ; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}