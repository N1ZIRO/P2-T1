function tema() {
    document.documentElement.classList.toggle('tema')

}

function validar() {
    var n = document.getElementById('nombre').value
    var m = document.getElementById('matricula').value
    var p = document.getElementById('promedio').value
    var v = 1

    if (n == '') {
        var nc = document.getElementById('nombre')
        nc.classList.add('is-invalid')
        nc.classList.add('animate__animated')
        nc.classList.add('animate__wobble')
        v = v + 1;
    }
    if (m == '') {
        var mc = document.getElementById('matricula')
        mc.classList.add('is-invalid')
        mc.classList.add('animate__animated')
        mc.classList.add('animate__wobble')
        v = v + 1;
    }
    if (p == '') {
        var pc = document.getElementById('promedio')
        pc.classList.add('is-invalid')
        pc.classList.add('animate__animated')
        pc.classList.add('animate__wobble')
        v = v + 1;
    }
    if (v == 1) {
        swal("Gracias.", "Proceso realizado con exito!!", "success")
    }
}


function qt(laberr) {
    var laberr = document.getElementById(laberr)
    laberr.classList.remove('is-invalid')
    laberr.classList.remove('animate__animated')
    laberr.classList.remove('animate__wobble')
}``