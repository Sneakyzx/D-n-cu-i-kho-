function saveUserToStorage(newUser) {
    users.push(newUser);
    let result = JSON.stringify(users);
    localStorage.setItem('users', result);
}

function getUsersFromStorage() {
    let result = localStorage.getItem('users') || '[]';
    let users = JSON.parse(result);
    return users;
}

let users = getUsersFromStorage();

let $registerForm = document.getElementById('register-form');

let $registerFullnameError = document.getElementById('register-fullname-error');
let $registerEmailError = document.getElementById('register-email-error');
let $registerPasswordError = document.getElementById('register-password-error');
let $registerConfirmPasswordError = document.getElementById('register-confirm-password-error');

// xử lý sự kiện submit trên form đăng ký
$registerForm.onsubmit = function(event) {
    // chặn reload trang, chặn chuyển trang tới action của form
    event.preventDefault(); 

    // lấy ra giá trị nhập vào các ô input
    let fullname = $registerForm.fullname.value;
    let email = $registerForm.email.value;
    let password = $registerForm.password.value;
    let confirmPassword = $registerForm.confirmPassword.value;

    // xoá nội dung của các thẻ báo lỗi
    $registerFullnameError.innerHTML = '';
    $registerEmailError.innerHTML = '';
    $registerPasswordError.innerHTML = '';
    $registerConfirmPasswordError.innerHTML = '';

    // kiểm tra các giá trị
    let isPassed = true;

    if (fullname == '') {
        isPassed = false;
        $registerFullnameError.innerHTML = 'Input your fullname';
    }

    if (email == '') {
        isPassed = false;
        $registerEmailError.innerHTML = 'Input your email';
    }

    if (password == '') {
        isPassed = false;
        $registerPasswordError.innerHTML = 'Input your password';
    }

    if (confirmPassword == '') {
        isPassed = false;
        $registerConfirmPasswordError.innerHTML = 'Input your email';
    }

    if (password != '' && confirmPassword != '' && password != confirmPassword) {
        isPassed = false;
        $registerConfirmPasswordError.innerHTML = 'Your password confirmation is incorrect';
    }
    
    if (isPassed) {

        let foundUser = users.find(function(user) {
            return user.email == email;
        });
    
        if(foundUser) {
            $registerEmailError.innerHTML = 'This email has been already taken';
            return; // dừng function
        }

        let newUser = {
            id: Date.now(),
            fullname: fullname,
            email: email,
            password: password
        };

        saveUserToStorage(newUser);
        alert('Đăng ký thành công');
        
    }
    
}