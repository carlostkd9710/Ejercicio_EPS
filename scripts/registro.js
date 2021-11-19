let nombre , apellido, telefono, direccion, ciudad;

let btnEnviar = document.getElementById('btnEnviar')
let form = document.getElementById('form')
let users = []

form.addEventListener('submit',formSubmit)

function formSubmit(e){
    e.preventDefault()
}

btnEnviar.addEventListener('click',capturarDatos)

function capturarDatos(){
    nombre = document.getElementById('inputNombre').value;
    apellido = document.getElementById('inputApellido').value;
    email = document.getElementById('inputEmail').value;
    password = document.getElementById('inputPassword').value;
    telefono = document.getElementById('inputTelefono').value;
    direccion = document.getElementById('inputDireccion').value;
    ciudad = document.getElementById('inputCiudad').value;
    let allUsers ={nombre, apellido,email,password, telefono, direccion, ciudad}
    users.unshift(allUsers)
    localStorage.setItem('Users',JSON.stringify(users))
    /* guardarLocalStorage(nombre, apellido,email,password, telefono, direccion, ciudad) */
    /* let usuario = new Persona(nombre, apellido, telefono, direccion, ciudad) */
    console.log(nombre, apellido,email,password, telefono, direccion, ciudad);
}
/* 
function guardarLocalStorage(nombre, apellido,email,password, telefono, direccion, ciudad){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Apellido',apellido)
    localStorage.setItem('Email',email)
    localStorage.setItem('Password',password)
    localStorage.setItem('Telefono',telefono)
    localStorage.setItem('Direccion',direccion)
    localStorage.setItem('Ciudad',ciudad)
} */