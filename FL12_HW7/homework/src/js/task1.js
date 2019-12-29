let email = prompt(`Please enter your e-mail`);
let five = 5;
let six = 6;

if (email===null||''){
    alert(`Canceled.`);
} else if(email.length<six) {
    alert(`I don't know any emails having name length less than 6 symbols`);
} else if (email === 'user@gmail.com' ||email === 'admin@gmail.com') {
    let password = prompt(`Please enter your password`);
    if (email ==='user@gmail.com' && password==='UserPass'){
        let changePass = confirm('Do you want to change your password?');
        if ( changePass === false){
            alert('You have failed the change.');
        }else {
            let oldPass = prompt(`Please write your old password`);
            if (oldPass===password) {
                let newPass = prompt(`Please write your new password`);
                if (newPass.length>five){
                    alert(`It’s too short password. Sorry.`);
                } else{
                    let newPassCheck = prompt(`Please write your new password again`);
                    if(newPass===newPassCheck){
                        alert(`You have successfully changed your password`);
                    } else{
                        alert(`You wrote the wrong password.`);
                    }
                }
            }
        }
    }else if (email ==='admin@gmail.com' && password==='AdminPass'){
        let changePass = confirm('Do you want to change your password?');
        if (changePass === false){
            alert('You have failed the change.')
        }else {
            let oldPass = prompt('Please write your old password');
            if (oldPass===password) {
                let newPass = prompt('Please write your new password');
                if (newPass.length>five){
                    alert('It’s too short password. Sorry.');
                } else{
                    let newPassCheck = prompt('Please write your new password again');
                    if(newPass===newPassCheck){
                        alert('You have successfully changed your password');
                    } else{
                        alert('You wrote the wrong password.');
                    }
                }
            }
        }
    } else{
        alert('Wrong password')
    }
}