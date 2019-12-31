const addOne = x=>x+1;
const pipe = (x, ...arg)=>{
    let sum = x;
    for (let i = 0; i<arg.length; i++) {
        sum = arg[i](sum);
    }
    return sum;
};
console.log(pipe(2, addOne, addOne, addOne));