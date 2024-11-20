/*desafios:*/
/*crear un botón de limpiar*/
/*agregar carácteres especiales*/
/*decirle al usuario que la contraseña es debil o fuerte*/

const cadenaCadacteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
let cantidad = document.getElementById("cantidad");
let btnGenerar = document.getElementById("generar");
let btnLimpiar = document.getElementById("limpiar");

function verificar(contraseña) {
    const regex = /(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])/;
    return contraseña.length >= 8 && regex.test(contraseña); 
}

btnLimpiar.addEventListener("click", function () {
    document.getElementById("contrasena").value = "";
});

function generar() {
    let longitudContrasena = parseInt(cantidad.value);

    if (longitudContrasena < 6) {
        mostrarMensaje("La contraseña debe tener al menos 6 caracteres", "debil");
        return;
    }

    let contrasena = generarContrasena(longitudContrasena);
    document.getElementById("contrasena").value = contrasena;

    if (verificar(contrasena)) {
        mostrarMensaje("Contraseña fuerte", "fuerte");
    } else {
        mostrarMensaje("Contraseña débil", "debil");
    }
}

function generarContrasena(longitud) {
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        let posicion = Math.floor(Math.random() * cadenaCadacteres.length);
        contrasena += cadenaCadacteres[posicion];
    }
    return contrasena;
}

function mostrarMensaje(mensaje, clase) {
    let mensajeLongitud = document.getElementById("mensaje-longitud");
    mensajeLongitud.textContent = mensaje;
    mensajeLongitud.classList.add(clase);
    mensajeLongitud.classList.remove(clase === "debil" ? "fuerte" : "debil");
}

btnGenerar.addEventListener("click", generar);
