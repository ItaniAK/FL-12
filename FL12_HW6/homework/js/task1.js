let a = parseInt(prompt('Please enter A value'));
let b = parseInt(prompt('Please enter B value'));
let c = parseInt(prompt('Please enter C value'));

let two = 2;
let four = 4;

let d = b * b - four * a * c;

let mathSqrtD =Math.sqrt(d);

console.log(`Discriminant = ${d}`);
if( d > 0){
    let x1 = (-b+mathSqrtD)/(two*a);
    let x2 = (-b-mathSqrtD)/(two*a);
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
}else if(isNaN(d)){
    console.log('Invalid input data');
}