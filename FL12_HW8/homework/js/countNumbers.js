function countNumbers (userValue) {
    let arr = [...userValue];
    let arr2 = [];

    for (let i = 0; i < arr.length; i++){
        let num = parseInt(arr[i]);
        if (!Number.isNaN(num)) {
            arr2.push(num);
        }
    }
    let result = {};
    for (let i = 0; i < arr2.length; ++i) {
        let a = arr2[i];
        if (result[a] !== undefined){
            ++result[a];
        }else{
            result[a] = 1;
        }
    }
    for (let key in result) {
        console.log({[key]: result[key]});
    }
}
countNumbers("erer384jj4444666888jfd123");