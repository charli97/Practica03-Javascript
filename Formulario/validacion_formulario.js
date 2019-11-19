function validarCamposObligatorios() {
    var bandera = true
    var bandera2 = true
    var bandera3 = true
    var bandera4 = true
    var bandera5 = true
    for (var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value == '' && elemento.type == 'text' || elemento.type == '' && elemento.type == 'password') {
            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').innerHTML = '<br>* Este campo esta vacio.'
            } else if (elemento.id == 'nombres') {
                document.getElementById('mensajeNombre').innerHTML = '<br>* Este campo esta vacio.'
            } else if (elemento.id == 'apellidos') {
                document.getElementById('mensajeApellido').innerHTML = '<br>* Este campo esta vacio.'
            } else if (elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').innerHTML = '<br>* Este campo esta vacio.'
            } else if (elemento.id == 'telefono') {
                document.getElementById('mensajeTelefono').innerHTML = '<br>* Este campo esta vacio.'
            } else if (elemento.id == 'fechaNacimiento') {
                document.getElementById('mensajeFecha').innerHTML = '<br>* Este campo esta vacio.'
            } else if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = '<br>* Este campo esta vacio.'
            } else if (elemento.id == 'contrasena') {
                document.getElementById('mensajeContra').innerHTML = '<br>* Este campo esta vacio.'
            }
            elemento.style.border = '3px red solid';
            elemento.className = 'error';
            bandera = false;
        }
        if (elemento.id == 'cedula' && elemento.value != '') {
            var ced = document.getElementById('cedula').value;
            var arrayCed = ced.split("");
            var coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
            var resultado = 0;
            multi = new Array(8);
            for (var j = 0; j < arrayCed.length - 1; j++) {
                multi[j] = coeficientes[j] * arrayCed[j];
                if (multi[j] >= 10) {
                    multi[j] = multi[j] - 9;
                }
                resultado = resultado + multi[j];
            }
            var aux = resultado - (resultado % 10) + 10;
            var verificador = aux - resultado;
            if (verificador != arrayCed[9]) {
                bandera2 = false;
                elemento.style.border = '3px red solid';
                elemento.className = 'error';
            }
        }
        if (elemento.id == 'fechaNacimiento' && elemento.value != '') {
            var fecha = document.getElementById('fechaNacimiento').value;
            var arrayFecha = fecha.split('');
            if (arrayFecha[2] != '/' && arrayFecha[5] != '/' || arrayFecha[0] == '/' && arrayFecha[1] == '/' || arrayFecha[3] == '/' && arrayFecha[4] == '/' || arrayFecha[6] == '/' && arrayFecha[7] == '/' && arrayFecha[8] == '/' && arrayFecha[9] == '/') {
                bandera3 = false;
                elemento.style.border = '3px red solid';
                elemento.className = 'error';
            }
        }
        if (elemento.id == 'correo' && elemento.value != '') {
            var correo = document.getElementById('correo').value;
            var arrayCorreo = correo.split('');
            var verificando = '';
            var resultado = '';
            var aux = 0;
            for (var i = 0; i < arrayCorreo.length; i++) {
                if (arrayCorreo[i] == '@') {
                    aux = i;
                }
            }
            if (aux != 0 && aux >= 3) {
                for (var j = aux; j < arrayCorreo.length; j++) {
                    resultado = resultado + arrayCorreo[j];
                }
            } else {
                bandera4 = false;
                elemento.style.border = '3px red solid';
                elemento.className = 'error';
            }
            if (resultado == '@est.ups.edu.ec' || resultado == '@ups.edu.ec') {

            } else {
                bandera4 = false;
                elemento.style.border = '3px red solid';
                elemento.className = 'error';
            }
        }
        if(elemento.id == 'contrasena' && elemento.value != ''){
            var contra = document.getElementById('contrasena').value
            var arrayContra = contra.split('')
            console.log(contra.length);
            if (contra.length <= 7){
                bandera5 = false
                elemento.style.border = '3px red solid';
                elemento.className = 'error';
            }else {
                
            }
        }
    }
    if (!bandera) {
        alert('Error: Campos Vacios!!')
    } else {
        if (!bandera2) {
            alert('Error: Cedula Incorrecta!!')
            bandera = false;
        } else {
            if (!bandera3) {
                alert('Error: Formato de Fecha Incorrecto!!')
                bandera = false;
            } else {
                if (!bandera4) {
                    alert('Correo Incorrecto!!')
                    bandera = false;
                }else{
                    if(!bandera5){
                        alert('Contrasena Incorrecto!!')
                        bandera = false;
                    }
                }
            }

        }
    }
    return bandera
}


function validarLetras(elemento) {
    if (elemento.value.length > 0) {
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        if (miAscii >= 97 && miAscii <= 122 || miAscii >= 65 && miAscii <= 90 || miAscii == 32) {
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


