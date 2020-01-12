//task#1
function convert (){
    let arr= [...arguments];
    let newArr = [];
    arr.map(function(el){
        if(typeof el === 'string'){
            newArr.push(parseInt(el));
        }else if(typeof el === 'number'){
            newArr.push(el.toString());
        }
        return false;
    }
);
     return newArr;
}

//console.log(convert('1', 2, 3, '4'));

// task#2
function executeforEach (arr, func){
    let res = arr.forEach(func);
    return res;
}
//console.log(executeforEach([1,2,3], function(el) {console.log(el * 2)}));

//task#3
function mapArray(arr, func) {
    const newArr=[];
    for (let i = 0; i <arr.length; i++){
        newArr.push(func(parseInt(arr[i])));
    }
    return newArr;
}
//console.log(mapArray([2, '5', 8], function(el) {return el + 3}));

//task#4
function filterArray (arr, func) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let res = func(arr[i]);
        if (res === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//console.log(filterArray([2, 5, 8], function(el) { return el % 2 === 0 }) );

//task#5
 function flipOver(str) {
     let arr = [...str];
     let arrReverse = arr.reverse();
     return arrReverse.join('');
 }
 //console.log(flipOver('hey world'));

//task#6
function makeListFromRange(arr) {
    let start = arr[0];
    let end = arr[1];
    const length = end+1 - start;
    let newArr= Array.from({ length }, (_, i) => start + i);
    return newArr;
}
//console.log(makeListFromRange([2, 7]));

//task #7
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }];

function getArrayOfKey (arr, key) {
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        newArr.push(arr[i][key]);
    }
    return newArr;
}
//console.log(getArrayOfKey(actors, 'name'));

//task#8
function substitute(arr) {
    let newArr =[];
    let thirty = 30;
    for(let i =0; i<arr.length; i++){
        if(arr[i]<=thirty){
            newArr.push('*');
        }else{
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
//substitute([58, 14, 48, 2, 31, 29]);

// task #9

//const date = new Date(2019, 0, 2);
const msDay = 86400000;

function getPastDay(date, days) {
    let msUTC = Date.parse(date);
    let daysUTC = days*msDay;
    let newDate = msUTC-daysUTC;
    return new Date(newDate);
}
//console.log(getPastDay(date, 1));

//task #10
function formatDate(date){
    return date.toISOString();

}
console.log(formatDate(new Date()));