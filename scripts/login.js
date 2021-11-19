let login = document.getElementById('btnLogin')

login.addEventListener('click',e =>{
    e.preventDefault();
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value
    console.log(email,pass)
    let data = JSON.parse(localStorage.getItem('users'))

    let filtro = data.filter(users => users.email.toLowerCase() === email.toLowerCase())

})