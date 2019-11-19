function validarCamposObligatorios() {
    var bandera = true
    for (var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value == '' && elemento.type == 'text' || elemento.type == 'password') {
            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').innerHTML = '<br>* Este campo esta vacio.'
            }else if(elemento.id == 'nombres'){
                document.getElementById('mensajeNombre').innerHTML = '<br>* Este campo esta vacio.'
            }else if(elemento.id == 'apellidos'){
                document.getElementById('mensajeApellido').innerHTML = '<br>* Este campo esta vacio.'
            }else if(elemento.id == 'direccion'){
                document.getElementById('mensajeDireccion').innerHTML = '<br>* Este campo esta vacio.'
            }else if(elemento.id == 'telefono'){
                document.getElementById('mensajeTelefono').innerHTML = '<br>* Este campo esta vacio.'
            }else if(elemento.id == 'fechaNacimiento'){
                document.getElementById('mensajeFecha').innerHTML = '<br>* Este campo esta vacio.'
            }else if(elemento.id == 'correo'){
                document.getElementById('mensajeCorreo').innerHTML = '<br>* Este campo esta vacio.'
            }else if(elemento.id == 'contrasena'){
                document.getElementById('mensajeContra').innerHTML = '<br>* Este campo esta vacio.'
            }
            elemento.style.border = '3px red solid'
            elemento.className = 'error'
            bandera = false
        }
        if(elemento.id == 'cedula' && elemento.value != ''){
            var ced = document.getElementById('cedula').value;
            var arrayCed = ced.split("");
            var coeficientes = [2,1,2,1,2,1,2,1,2];
            var resultado = 0;
            multi = new Array(8);
            for(var j = 0; j < arrayCed.length-1; j++){
                multi[j] = coeficientes[j] * arrayCed[j];
                if (multi[j] >= 10){
                    multi[j] = multi[j] - 9;
                }
                resultado = resultado + multi[j];
            }
            var aux = resultado - (resultado%10) +10;
            var verificador = aux - resultado;
            if(verificador == arrayCed[9]){
                document.write("ES CORRECTA LA CEDULA");
            }else{
                document.write("ES INCORRECTA LA CEDULA");
            }
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


