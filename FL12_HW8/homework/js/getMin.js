function getMin(){
    let arr=[...arguments];
    return Math.min(...arr);
}
console.log(getMin(3, 0, -3));