let count = 0;

function cardCounter(card) {

  // number cards
  if (typeof card === "number") {

    if (card >= 2 && card <= 6) {
      count++;   // increase
    } 
    else if (card >= 7 && card <= 9) {
      // no change
    } 
    else {
      count--;   // 10
    }

  }
  // string cards
  else if (typeof card === "string") {
    count--;     // J, Q, K, A
  }

  // decision
  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}

// test
console.log(cardCounter(2));
