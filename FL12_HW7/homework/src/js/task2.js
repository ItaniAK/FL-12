let p1 = 100;
let curNum= 0;
let p2 = 50;
let p3 = 25;
let sum = 0;
let doublePrise = 2;
let eight = 8;
let riseQuantityNum = 4;
let enter = confirm('Do you want to play a game?');
if (enter === false) {
    alert('You did not become a billionaire, but can.');
} else {
    let randomNumber = Math.floor(Math.random() * eight);
    let attempt1 = +prompt(`Choose a roulette pocket number from 0 to ${eight}
Attempts left: 3
Total price: ${sum}
Possible prise on current attempt: ${p1} $
`);
    if (attempt1 === randomNumber) {
        alert(`Congratulation, you won! Your prize is ${p1} $.`);
        let continueGame = confirm('Do you want to continue?');
        sum = p1;
        curNum = eight;
        while (continueGame === true) {
            curNum += riseQuantityNum;
            p1 *= doublePrise;
            let randomNumber = Math.floor(Math.random() * curNum);
            console.log(randomNumber);
            let attempt1 = +prompt(`Choose a roulette pocket number from 0 to ${curNum}
Attempts left: 3
Total price: ${sum} $
Possible prise on current attempt: ${p1} $
`);
            if (attempt1 === randomNumber) {
                alert(`Congratulation, you won! Your prize is ${p1} $.`);
                sum = sum + p1;
                let continueGame1 = confirm('Do you want to continue?');
                if (continueGame1 === false) {
                    alert(`Congratulation, you won! Your prize is ${sum} $.`);
                    break;
                }
            } else if (attempt1 !== randomNumber) {
                p2 *= doublePrise;
                let randomNumber = Math.floor(Math.random() * curNum);
                let attempt2 = +prompt(`Choose a roulette pocket number from 0 to' ${curNum}
Attempts left: 2
Total price: ${sum} $
Possible prise on current attempt: ${p2} $
`);
                if (attempt2 === randomNumber) {
                    alert(`Congratulation, you won! Your prize is ${p2} $.`);
                    sum = sum + p2;
                    let continueGame1 = confirm('Do you want to continue?');
                    if (continueGame1 === false) {
                        alert(`Congratulation, you won! Your prize is ${sum} $.`);
                        break;
                    }
                } else if (attempt2 !== randomNumber) {
                    p3 *= doublePrise;
                    let randomNumber = Math.floor(Math.random() * curNum);
                    let attempt3 = +prompt(
                        `Choose a roulette pocket number from 0 to ${curNum}
Attempts left: 1
Total price: ${sum} $
Possible prise on current attempt: ${p3} $
`);
                    if (attempt3 === randomNumber) {
                        alert(`Congratulation, you won! Your prize is ${p3} $.`);
                        sum = sum + p3;
                        let continueGame1 = confirm('Do you want to continue?');
                        if (continueGame1 === false) {
                            alert(`Congratulation, you won! Your prize is ${sum} $.`);
                            break;
                        }
                    } else if (attempt3 !== randomNumber) {
                        alert('You lose.');
                        break;
                    }
                }
            }
        }
    } else if (attempt1 !== randomNumber) {
        let attempt2 = +prompt(`Choose a roulette pocket number from 0 to' ${eight}
Attempts left: 2
Total price: ${sum} $
Possible prise on current attempt: ${p2} $
`);
        if (attempt2 === randomNumber) {
            alert(`Congratulation, you won! Your prize is ${p2} $.`);
            let continueGame = confirm('Do you want to continue?');
            sum = p2;
            curNum = eight;
            while (continueGame === true) {
                curNum += riseQuantityNum;
                p1 *= doublePrise;
                let randomNumber = Math.floor(Math.random() * curNum);
                let attempt1 = +prompt(`Choose a roulette pocket number from 0 to ${curNum}
Attempts left: 3
Total price: ${sum} $
Possible prise on current attempt: ${p1} $
`);
                if (attempt1 === randomNumber) {
                    alert(`Congratulation, you won! Your prize is ${p1} $.`);
                    sum = sum + p1;
                    let continueGame1 = confirm('Do you want to continue?');
                    if (continueGame1 === false) {
                        alert(`Congratulation, you won! Your prize is ${sum} $.`);
                        break;
                    }
                } else if (attempt1 !== randomNumber) {
                    p2 *= doublePrise;
                    let randomNumber = Math.floor(Math.random() * curNum);
                    let attempt2 = +prompt(`Choose a roulette pocket number from 0 to' ${curNum}
Attempts left: 2
Total price: ${sum} $
Possible prise on current attempt: ${p2} $
`);
                    if (attempt2 === randomNumber) {
                        alert(`Congratulation, you won! Your prize is ${p2} $.`);
                        sum = sum + p2;
                        let continueGame1 = confirm('Do you want to continue?');
                        if (continueGame1 === false) {
                            alert(`Congratulation, you won! Your prize is ${sum} $.`);
                            break;
                        }
                    } else if (attempt2 !== randomNumber) {
                        p3 *= doublePrise;
                        let randomNumber = Math.floor(Math.random() * curNum);
                        console.log(randomNumber);
                        let attempt3 = +prompt(
                            `Choose a roulette pocket number from 0 to ${curNum}
Attempts left: 1
Total price: ${sum} $
Possible prise on current attempt: ${p3} $
`);
                        if (attempt3 === randomNumber) {
                            alert(`Congratulation, you won! Your prize is ${p3} $.`);
                            sum = sum + p3;
                            let continueGame1 = confirm('Do you want to continue?');
                            if (continueGame1 === false) {
                                alert(`Congratulation, you won! Your prize is ${sum} $.`);
                                break;
                            }
                        } else if (attempt3 !== randomNumber) {
                            alert('You lose.');
                            break;
                        }
                    }
                }
            }
            if (attempt1 === randomNumber) {
                alert(`Congratulation, you won! Your prize is ${p1} $.`);
                let continueGame = confirm('Do you want to continue?');
                sum = p1;
                curNum = eight;
                while (continueGame === true) {
                    curNum += riseQuantityNum;
                    p1 *= doublePrise;
                    let randomNumber = Math.floor(Math.random() * curNum);
                    let attempt1 = +prompt(`Choose a roulette pocket number from 0 to ${curNum}
Attempts left: 3
Total price: ${sum} $
Possible prise on current attempt: ${p1} $
`);
                    if (attempt1 === randomNumber) {
                        alert(`Congratulation, you won! Your prize is ${p1} $.`);
                        sum = sum + p1;
                        let continueGame1 = confirm('Do you want to continue?');
                        if (continueGame1 === false) {
                            alert(`Congratulation, you won! Your prize is ${sum} $.`);
                            break;
                        }
                    } else if (attempt1 !== randomNumber) {
                        p2 *= doublePrise;
                        let randomNumber = Math.floor(Math.random() * curNum);
                        let attempt2 = +prompt(`Choose a roulette pocket number from 0 to' ${curNum}
Attempts left: 2
Total price: ${sum} $
Possible prise on current attempt: ${p2} $
`);
                        if (attempt2 === randomNumber) {
                            alert(`Congratulation, you won! Your prize is ${p2} $.`);
                            sum = sum + p2;
                            let continueGame1 = confirm('Do you want to continue?');
                            if (continueGame1 === false) {
                                alert(`Congratulation, you won! Your prize is ${sum} $.`);
                                break;
                            }
                        } else if (attempt2 !== randomNumber) {
                            p3 *= doublePrise;
                            let randomNumber = Math.floor(Math.random() * curNum);
                            let attempt3 = +prompt(
                                `Choose a roulette pocket number from 0 to ${curNum}
Attempts left: 1
Total price: ${sum} $
Possible prise on current attempt: ${p3} $
`);
                            if (attempt3 === randomNumber) {
                                alert(`Congratulation, you won! Your prize is ${p3} $.`);
                                sum = sum + p3;
                                let continueGame1 = confirm('Do you want to continue?');
                                if (continueGame1 === false) {
                                    alert(`Congratulation, you won! Your prize is ${sum} $.`);
                                    break;
                                }
                            } else if (attempt3 !== randomNumber) {
                                alert('You lose.');
                                break;
                            }
                        }
                    }
                }
            }
        } else if (attempt2 !== randomNumber) {
            let attempt3 = +prompt(`Choose a roulette pocket number from 0 to' ${eight}
Attempts left: 1
Total price: ${sum} $
Possible prise on current attempt: ${p3} $
`);
            if (attempt3 === randomNumber) {
                alert(`Congratulation, you won! Your prize is ${p3} $.`);
                let continueGame = confirm('Do you want to continue?');
                sum = p3;
                curNum = eight;
                while (continueGame === true) {
                    curNum += riseQuantityNum;
                    p1 *= doublePrise;
                    let randomNumber = Math.floor(Math.random() * curNum);
                    let attempt1 = +prompt(`Choose a roulette pocket number from 0 to ${curNum}
Attempts left: 3
Total price: ${sum} $
Possible prise on current attempt: ${p1} $
`);
                    if (attempt1 === randomNumber) {
                        alert(`Congratulation, you won! Your prize is ${p1} $.`);
                        sum = sum + p1;
                        let continueGame1 = confirm('Do you want to continue?');
                        if (continueGame1 === false) {
                            alert(`Congratulation, you won! Your prize is ${sum} $.`);
                            break;
                        }
                    } else if (attempt1 !== randomNumber) {
                        p2 *= doublePrise;
                        let randomNumber = Math.floor(Math.random() * curNum);
                        let attempt2 = +prompt(`Choose a roulette pocket number from 0 to' ${curNum}
Attempts left: 2
Total price: ${sum} $
Possible prise on current attempt: ${p2} $
`);
                        if (attempt2 === randomNumber) {
                            alert(`Congratulation, you won! Your prize is ${p2} $.`);
                            sum = sum + p2;
                            let continueGame1 = confirm('Do you want to continue?');
                            if (continueGame1 === false) {
                                alert(`Congratulation, you won! Your prize is ${sum} $.`);
                                break;
                            }
                        } else if (attempt2 !== randomNumber) {
                            p3 *= doublePrise;
                            let randomNumber = Math.floor(Math.random() * curNum);
                            let attempt3 = +prompt(
                                `Choose a roulette pocket number from 0 to ${curNum}
Attempts left: 1
Total price: ${sum} $
Possible prise on current attempt: ${p3} $
`);
                            if (attempt3 === randomNumber) {
                                alert(`Congratulation, you won! Your prize is ${p3} $.`);
                                sum = sum + p3;
                                let continueGame1 = confirm('Do you want to continue?');
                                if (continueGame1 === false) {
                                    alert(`Congratulation, you won! Your prize is ${sum} $.`);
                                    break;
                                }
                            } else if (attempt3 !== randomNumber) {
                                alert('You lose.');
                                break;
                            }
                        }
                    }
                }
                if (attempt1 === randomNumber) {
                    alert(`Congratulation, you won! Your prize is ${p1} $.`);
                    let continueGame = confirm('Do you want to continue?');
                    sum = p1;
                    curNum = eight;
                    while (continueGame === true) {
                        curNum += riseQuantityNum;
                        p1 *= doublePrise;
                        let randomNumber = Math.floor(Math.random() * curNum);
                        let attempt1 = +prompt(`Choose a roulette pocket number from 0 to ${curNum}
Attempts left: 3
Total price: ${sum} $
Possible prise on current attempt: ${p1} $
`);
                        if (attempt1 === randomNumber) {
                            alert(`Congratulation, you won! Your prize is ${p1} $.`);
                            sum = sum + p1;
                            let continueGame1 = confirm('Do you want to continue?');
                            if (continueGame1 === false) {
                                alert(`Congratulation, you won! Your prize is ${sum} $.`);
                                break;
                            }
                        } else if (attempt1 !== randomNumber) {
                            p2 *= doublePrise;
                            let randomNumber = Math.floor(Math.random() * curNum);
                            let attempt2 = +prompt(`Choose a roulette pocket number from 0 to' ${curNum}
Attempts left: 2
Total price: ${sum} $
Possible prise on current attempt: ${p2} $
`);
                            if (attempt2 === randomNumber) {
                                alert(`Congratulation, you won! Your prize is ${p2} $.`);
                                sum = sum + p2;
                                let continueGame1 = confirm('Do you want to continue?');
                                if (continueGame1 === false) {
                                    alert(`Congratulation, you won! Your prize is ${sum} $.`);
                                    break;
                                }
                            } else if (attempt2 !== randomNumber) {
                                p3 *= doublePrise;
                                let randomNumber = Math.floor(Math.random() * curNum);
                                let attempt3 = +prompt(
                                    `Choose a roulette pocket number from 0 to ${curNum}
Attempts left: 1
Total price: ${sum} $
Possible prise on current attempt: ${p3} $
`);
                                if (attempt3 === randomNumber) {
                                    alert(`Congratulation, you won! Your prize is ${p3} $.`);
                                    sum = sum + p3;
                                    let continueGame1 = confirm('Do you want to continue?');
                                    if (continueGame1 === false) {
                                        alert(`Congratulation, you won! Your prize is ${sum} $.`);
                                        break;
                                    }
                                } else if (attempt3 !== randomNumber) {
                                    alert('You lose.');
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }else{
            alert('You Lose!')
        }
    }
}