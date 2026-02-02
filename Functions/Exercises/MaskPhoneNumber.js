function maskphone(phone) {
    if (phone.length < 4) {
        console.log('invalid phone number');
    }
    else if(phone.length > 10){
        console.log('This contain more than 10 numbers.');
    }
    else {
        let firstnum = phone.slice(0, 2);
        // console.log(firstnum);
        let lastnum = phone.slice(-2);
        // console.log(lastnum);
        let star = '*'.repeat(phone.length - 4);
        return firstnum + star + lastnum;
    }

}

console.log(maskphone('6282880821'));