function validarCamposObligatorios() {
    var bandera = true
    for (var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value == '' && elemento.type == 'text') {
            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').innerHTML = '<br>Este campo esta vacio.'
            }else if(elemento.id == 'nombres'){
                document.getElementById('mensajeNombre').innerHTML = '<br>Este campo esta vacio.'
            }else if(elemento.id == 'apellidos'){
                document.getElementById('mensajeApellido').innerHTML = '<br>Este campo esta vacio.'
            }
            elemento.style.border = '1px red solid'
            elemento.className = 'error'
            bandera = false
        }
    }
    if (!bandera) {
        alert('Error: Campos Vacios!!')
    }
    return bandera
}

function validarLetras(elemento) {
    if (elemento.value.length > 0) {
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        console.log(miAscii)

        if (miAscii >= 97 && miAscii <= 122 || miAscii >= 65 && miAscii <= 90) {
            return true
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length - 1)
            return false
        }
    } else {
        return true
    }
}

function validarNumeros(elemento) {
    if (elemento.value.length > 0) {
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        console.log(miAscii)
        if (miAscii >= 48 && miAscii <= 57 && elemento.value.length < 11) {
            return true
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length - 1)
            return false
        }
    } else {
        return true
    }
}


