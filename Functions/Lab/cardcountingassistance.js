let count = 0;

function cardCounter(card) {

    if (typeof card === 'number') {

        if (card >= 2 && card <= 6) {
            count = ++count;
            console.log(`${card} ${count} ,bet`);
        }
        else if (card >= 7 && card <= 9) {

            count = count;
            console.log(`${card} ${count} ,hold`)

        }
        else {
            count = --count;
            console.log(`${card} ${count} ,hold`);
        }
    }
    else if (typeof card === "string") {
        count = --count;
        console.log(`${card} ,hold`)
    }

}

console.log(cardCounter('j'));