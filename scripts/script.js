let formulario = document.querySelector('form')
let listarCitas = document.querySelector('#listarCitas')
let buscar = document.getElementById('btnBuscar')
let busqueda = document.getElementById('busqueda')
let citas =[]

if(localStorage.getItem('Citas')){
    citas = JSON.parse(localStorage.getItem('Citas'));
}

const capturarDatos = () => {
    let nombre = document.getElementById('nombre').value
    let fecha = document.getElementById('fecha').value
    let hora = document.getElementById('hora').value
    let sintomas = document.getElementById('sintomas').value


    let registro ={
        nombre,fecha,hora,sintomas
    }
    swal.fire({
        title: 'Seguro que quieres agendar la cita?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Agendar',
        denyButtonText: 'No Agendar',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          swal.fire('Cita Agendada!', '', 'success')
          citas.unshift(registro)
          localStorage.setItem('Citas',JSON.stringify(citas))
          pintarDatos();
        } else if (result.isDenied) {
          swal.fire('La cita no fue agendada', '', 'info')
        }
      })
      formulario.reset();
}

formulario.addEventListener('submit', e =>{
    e.preventDefault()
    capturarDatos();
})

const pintarDatos = () =>{
    listarCitas.innerHTML = ''
    let citasLocalStorage = JSON.parse(localStorage.getItem('Citas'))
    console.log(citasLocalStorage);

    citasLocalStorage.map(cita=>{
        const{nombre,fecha,hora,sintomas}=cita
        listarCitas.innerHTML+=`
            <tr>
                <td>${nombre}</td>
                <td>${fecha}</td>
                <td>${hora}</td>
                <td>${sintomas}</td>
            </tr>
        `
    })
}

document.addEventListener('DOMContentLoaded', pintarDatos())
buscar.addEventListener('click', e=>{
    e.preventDefault();
    let input = document.getElementById('inputBuscar').value
    let data = JSON.parse(localStorage.getItem('Citas'))
    let filtro = data.filter(cita => cita.nombre.toLowerCase() === input.toLowerCase())
    console.log(filtro)

    filtro.length === 0
    ?
        busqueda.innerHTML += `
            <div style="color:white;">El nombre ${input} no existe</div>
        `
    :
        filtro.map (cita =>{
            const {nombre, fecha,hora, sintomas} = cita
            busqueda.innerHTML +=`
            <div style="color:white;">${nombre}</div>
            <div style="color:white;">${fecha}</div>
            <div style="color:white;">${hora}</div>
            <div style="color:white;">${sintomas}
            <button>Borrar</button>
            </div>
            `
        })
})
