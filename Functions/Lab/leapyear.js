function isLeapYear(year){

    if(year % 400 === 0){
        return year + ' it is a leap Year';
    }
    else if(year % 100 === 0){
        return year + ' it is not a leap Year';
    }
    else if(year % 4 === 0){
        return year + ' it is a leap Year';
    }
    else{
        return year + ' it is not a leap Year';
    }
}

let year = 1904;
let result = isLeapYear(year);

console.log(result);