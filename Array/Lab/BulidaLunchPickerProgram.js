let lunches = [];

function addLunchToEnd(lunches,string){

lunches.push(string);
console.log(`${string} added to the end of the lunch menu.`);
return lunches;

}

function addLunchToStart(lunches,string){

lunches.unshift(string);
console.log(`${string} added to the start of the lunch menu.`);
return lunches;

}



function removeLastLunch(lunches){

if(lunches.length === 0){
  console.log("No lunches to remove.");
  return lunches;
}
else{
  let removelast = lunches.pop();
  console.log(`${removelast} removed from the end of the lunch menu.`);
    return lunches;

}

}

function removeFirstLunch(lunches){


if(lunches.length === 0){
  console.log("No lunches to remove.");
  return lunches;
}
else{
  let removefirst = lunches.shift();
  console.log(`${removefirst} removed from the start of the lunch menu.`);
  return lunches;
}


}

function getRandomLunch(lunches){


 if (lunches.length === 0) {
    console.log("No lunches available.");
    return;
  }

else{
  let getrandom = lunches[Math.floor(Math.random()*lunches.length)];
  console.log(`Randomly selected lunch: ${getrandom}`);
  return lunches;
}


}

function showLunchMenu(lunches){

  
 if (lunches.length === 0) {
    console.log("The menu is empty.");
    return;
  }

else{
 console.log("Menu items: "+ lunches.join(" "));
 return;
}
  
}