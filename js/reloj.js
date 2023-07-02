const mostrarReloj = () => {
    let fecha = new Date()
    let hr = formatoHora(fecha.getHours())
    let min = formatoHora(fecha.getMinutes())
    let seg = formatoHora(fecha.getSeconds())
    document.getElementById('hora').innerHTML = `${hr} : ${min} : ${seg}`

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']

    let diaSemana = dias[fecha.getDay()]
    let dia = formatoHora(fecha.getDate())
    let mes = meses[fecha.getMonth()]
    let anio = formatoHora(fecha.getFullYear())
    document.getElementById('fecha').innerHTML = `${diaSemana},${dia} - ${mes} - ${anio}`

    document.getElementById('contenedor').classList.toggle('animar')
}

const formatoHora = (hora) => {
    if (hora < 10)
        hora = '0' + hora
    return hora
}

setInterval(mostrarReloj, 1000)