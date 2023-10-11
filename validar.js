function valida_envia() {
    // Valida el nombre
    var nombre = document.fvalida.nombre.value.trim();
    if (nombre === "") {
        alert("Tiene que escribir su nombre");
        document.fvalida.nombre.focus();
        return false;
    }

    var apellido = document.fvalida.apellido.value.trim();
    if (apellido === "") {
        alert("Tiene que escribir su apellido");
        document.fvalida.apellido.focus();
        return false;
    }

    // Valida que el telefono sea valido.
    var telefono = document.fvalida.telefono.value;
    telefono = validarEntero(telefono);
    document.fvalida.telefono.value = telefono;
    if (telefono === "" || telefono < 1000000000 ) {
        alert("Ingrese un teléfono válido");
        document.fvalida.telefono.focus();
        return false;
    }

    // Valida el correo electrónico
    var email = document.fvalida.email.value.trim();
    if (email === "" || email.indexOf('@') === -1) {
        alert("Ingrese un mail valido");
        document.fvalida.email.focus();
        return false;
    }
    
    // Valida la fecha de nacimiento
    var fechaNacimiento = document.fvalida.fechaNacimiento.value;
    if (fechaNacimiento === "") {
        alert("Debe seleccionar una fecha de nacimiento.");
        document.fvalida.fechaNacimiento.focus();
        return false;
    }

        // Calcula la edad a partir de la fecha de nacimiento
        var fechaNacimientoDate = new Date(fechaNacimiento);
        var fechaActual = new Date();
        var edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    
        // Verifica si el cumpleaños ya ha ocurrido este año
        if (
            fechaNacimientoDate.getMonth() > fechaActual.getMonth() ||
            (fechaNacimientoDate.getMonth() === fechaActual.getMonth() && fechaNacimientoDate.getDate() > fechaActual.getDate())
        ) {
            edad--;
        }
    
        // Valida que la edad sea mayor o igual a 18
        if (edad < 18) {
            alert("Debe ser mayor o igual a 18 años para asistir al evento.");
            document.fvalida.fechaNacimiento.focus();
            return false;
        }


    // Valida el motivo de contacto
    //valido el marca
    if (document.fvalida.marca.selectedIndex == 0) {
        alert("Debe seleccionar una marca de interés.")
        document.fvalida.marca.focus()
        return 0;
    }

    // El formulario se envía
    alert("Su inscripción se registro con éxito");
    document.fvalida.submit();
    return true;
}

function validarEntero(valor) {
    valor = parseInt(valor);
    if (isNaN(valor)) {
        return "";
    } else {
        return valor;
    }
}
