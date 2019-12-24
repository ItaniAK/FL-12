let a = parseInt(prompt('Please, enter length of A side of triangle'));
let b = parseInt(prompt('Please, enter length of B side of triangle'));
let c = parseInt(prompt('Please, enter length of C side of triangle'));


if(isNaN(a)||isNaN(b)||isNaN(c)){
    alert('Input values should be ONLY numbers');
}else if(a<0||b<0||c<0){
    alert('A triangle must have 3 sides with a positive definite length ')
}else if(a+b>c && b+c>a && c+a>b){
    if(a*b===b*c && b*c===c*a) {
        alert('Equilateral triangle')
    } else if(a*b===b*c && c*a!==a*b) {
        alert('Isosceles triangle')
    } else if(b*c===c*a && c*a!==a*b) {
        alert('Isosceles triangle')
    } else if(c*a===a*b && a*b!==b*c) {
        alert('Isosceles triangle')
    } else{
        alert('Scalene triangle')
    }
}else{
    alert(`Triangle doesn't exist`)
}
