function confirmending(str,target){
    return str.slice(str.length - target.length) === target;
}

console.log(confirmending('onetwothree','ree'));
