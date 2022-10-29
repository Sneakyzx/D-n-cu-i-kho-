

function saveUserToStorage(newUser){
    users.push(newUser);
    let result = JSON.stringify(users);
    localStorage.setItem('users', result);
}

function getUserFromStorage(){
    let result = localStorage.getItem('users') || '[]';
    let users = JSON.parse(result);
    return users;
}

let users = getUserFromStorage;

let $registerForm = document.getElementById('register-form');
let $registerFullnameError = document.getElementById('register-fullname-error')
let $registerEmailError = document.getElementById('register-email-error')
let $registerPasswordError = document.getElementById('register-password-error')
let $registerConfirmPasswordError = document.getElementById('register-confirm-password-error')
// Xử lý sự kiện submit 
$registerForm.onsubmit =function(event) {
    event.preventDefault();  
    // Chặn chuyển trang đến action của form
    console.log('form đăng ký được submit');
    console.log('lấy dữ liệu ra từ các ô input để xử lí');

// lấy ra giá trị nhập vào các ô input ( chỉ thẻ form làm được)

    let fullname = $registerForm.fullname.value;
    let email = $registerForm.email.value;
    let password = $registerForm.password.value;
    let confirmPassword = $registerForm.confirmPassword.value;

    // xoá nội dung các thẻ báo lỗi
    $registerFullnameError.innerHTML = '';
    $registerEmailError.innerHTML = '';
    $registerPasswordError.innerHTML = '';
    $registerConfirmPasswordError.innerHTML = '';


    // kiểm tra giá trị
    let isPassed = true;

    if(fullname == ''){
        isPassed = false;
        $registerFullnameError.innerHTML = 'Input your Fullname';
    }
    if(email == ''){
        isPassed = false;
        $registerEmailError.innerHTML = 'Input your Email';
    }
    if(password == ''){
        isPassed = false;
        $registerPasswordError.innerHTML = 'Input your password';
    }
    if(confirmPassword == ''){
        isPassed = false;
        $registerConfirmPasswordError.innerHTML = 'Input your Confirm Password';
    }
    if(password != '' && confirmPassword != '' && password != confirmPassword){
        isPassed = false;
        $registerConfirmPasswordError.innerHTML = 'Your password confirmation is not correct';
    }

    if(isPassed){
        let foundUser = users.find(function(user) {
            return user.email == email;
        });

        if (foundUser) {
            $registerEmailError.innerHTML = 'Email đã tồn tại';

            return; // dùng function
        }

        console.log('Đăng ký thành công');
        let newUser = {
            id : Date.now(),
            email : email,
            password: password
        };
        saveUserToStorage(newUser);
        console.log(users);
    }
      
    console.log(fullname, email, password, confirmPassword);
}
