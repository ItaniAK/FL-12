function makeNumber (userValue){
    let arr = [...userValue];
    let arr2 = [];
    for (let i = 0; i<arr.length; i++){
        let num = parseInt(arr[i]);
        if(!Number.isNaN(num)){
            arr2.push(num);
        }
    }
    let str = arr2.join('');

    console.log(str);
}
makeNumber('erer384jjjfd123'); //=>384123