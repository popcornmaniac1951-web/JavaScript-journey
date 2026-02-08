function truncateString(str,number){

if(str.length > number){
  return str.slice(0,number) + '...';
}
else{
  return str;

}
}

console.log(truncateString('nameyou',7));