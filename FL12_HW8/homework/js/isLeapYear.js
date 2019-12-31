function isLeapYear(date){
    let years = new Date (date);
    let fullYear = years.getFullYear();
    if(fullYear%4===0){
        console.log(`${fullYear} is a leap year`);
    }else if (isNaN(fullYear)){
        console.log('Invalid Date');
    }else if(fullYear/4!==0){
        console.log(`${fullYear} is not a leap year`);
    }

}
console.log(isLeapYear('2020-01-01 00:00:00'));
console.log(isLeapYear('2021-01-15 13:00:00'));
console.log(isLeapYear('2020-01-01 00:00:00777'));