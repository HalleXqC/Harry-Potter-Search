const username = document.querySelector('.username');
const password = document.querySelector('.password');
const btn = document.querySelector('.btn');
const alertText = document.querySelector('.alert_text');

btn.addEventListener('click', e => {
    e.preventDefault();

    if(username.value == "" && password.value == ""){
        alertText.classList.add('text-danger', 'h6')
        alertText.innerHTML = "Пустые поля!";
    }else{
        if(username.value == 'admin' && password.value == 'admin'){
            alertText.classList.remove('text-danger', 'h6')
            alertText.classList.add('text-success', 'h5')
            alertText.innerHTML = "Welcome!"
            // window.open('admin.html', '_self');
            setTimeout(doSomething, 800);
            function doSomething(){window.open('admin.html', '_self')}
            username.value = '';
            password.value = '';
            localStorage.setItem('isAuth', 'true');
        }else{
            alertText.classList.add('text-danger', 'h6')
            alertText.innerHTML = "Wrong login or password!";
            username.value = '';
            password.value = '';
            localStorage.setItem('isAuth', 'false');
        }
    }
})

window.addEventListener('load', () => {
    const isAuth = localStorage.getItem('isAuth');
    if(isAuth == 'true'){
        window.open('admin.html', '_self')
    }else{
        null
    }
})