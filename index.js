//PRACTICA FUNCIONES Y BUCLES
/*
alert("Hola, bienvenido a la sección de consultas");

function validarNombre() {
  let nombre = prompt("Decime tu nombre");
  while (nombre === "" || nombre.trim().length === 0) {
    alert("Por favor re-escribi tu nombre.");
    let = nombre = prompt("Decime tu nombre");
  }
  return nombre;
}

function validarEmail() {
  let email = prompt("Decime tu email");
  while (email === "" || email.trim().length === 0) {
    alert("Por favor re-escribi tu email.");
    let = email = prompt("Decime tu email");
  }
  return email;
}

function validarMotivo() {
  let motivo = prompt("Decime el motivo: \n Suggestion \n Complaint \n Other");
  if (motivo === "Suggestion") {
    alert("Seleccionaste Suggestion");
  } else if (motivo === "Complaint") {
    alert("Seleccionaste Complaint");
  } else if (motivo === "Other") {
    alert("Seleccionaste Other");
  } else {
    alert("No seleccionaste una opción correcta");
    validarMotivo();
  }
  return motivo;
}

function validarPais() {
  let pais = prompt("Decime el pais");
  while (pais === "" || pais.trim().length === 0) {
    alert("Por favor decime el pais.");
    let = pais = prompt("Decime el pais");
  }
  return pais;
}

function validarMensaje() {
  let mensaje = prompt("Decime el mensaje");
  while (mensaje === "" || mensaje.trim().length === 0) {
    alert("Por favor decime el mensaje.");
    let = mensaje = prompt("Decime el mensaje");
  }
  return mensaje;
}

validarNombre();
validarEmail();
validarMotivo();
validarPais();
validarMensaje();

let nombreFormulario = validarNombre(nombre);
let emailFormulario = validarEmail(email);
let motivoFormulario = validarMotivo(motivo);
let paisFormulario = validarPais(pais);
let mensajeFormulario = validarMensaje(mensaje);
*/

//PRACTICA ARRAYS Y OBJETOS
//declaro variable

/*

const respuestasFormulario = [];

function consultaFormulario() {
  this.bienvenido = alert("Hola, bienvenido a la sección de consultas");
  this.validarNombre = function () {
    let nombre = prompt("Decime tu nombre");
    while (nombre === "" || nombre.trim().length === 0) {
      alert("Por favor re-escribi tu nombre.");
      nombre = prompt("Decime tu nombre");
    }
    return (this.nombre = nombre);
  };

  this.validarEmail = function () {
    let email = prompt("Decime tu email");
    while (email === "" || email.trim().length === 0) {
      alert("Por favor re-escribi tu email.");
      email = prompt("Decime tu email");
    }
    return (this.email = email);
  };

  this.validarMotivo = function () {
    let motivo = prompt(
      "Decime el motivo: \n Suggestion \n Complaint \n Other"
    );
    return (this.motivo = motivo);
  };

  this.validarPais = function () {
    let pais = prompt("Decime el pais");
    while (pais === "" || pais.trim().length === 0) {
      alert("Por favor decime el pais.");
      pais = prompt("Decime el pais");
    }
    return (this.pais = pais);
  };

  this.validarMensaje = function () {
    let mensaje = prompt("Decime el mensaje");
    while (mensaje === "" || mensaje.trim().length === 0) {
      alert("Por favor decime el mensaje.");
      mensaje = prompt("Decime el mensaje");
    }
    return (this.mensaje = mensaje);
  };
}

const consulta1 = new consultaFormulario();
consulta1.validarNombre();
consulta1.validarEmail();
consulta1.validarMotivo();
consulta1.validarPais();
consulta1.validarMensaje();
const consulta2 = new consultaFormulario();
consulta2.validarNombre();
consulta2.validarEmail();
consulta2.validarMotivo();
consulta2.validarPais();
consulta2.validarMensaje();

console.log(consulta1);
console.log(consulta2);

respuestasFormulario.push(consulta1);
respuestasFormulario.push(consulta2);

console.log(respuestasFormulario);

//Agrego busqueda
const consultasOther = respuestasFormulario.find((m) => m.motivo === "Other");
console.log(consultasOther);

//Primeros puntos con DOM
let parte = document.getElementsByClassName("footer");
console.log(parte[0].innerHTML);
parte[0].innerHTML = "Este es el footer";
*/

//Aplicando DOM y eventos al form de Contact

let formulario = document.getElementById("formularioContact");

let respuestasFormName = document.getElementById("formName");

let respuestasFormEmail = document.getElementById("formEmail");
/*

let respuestasFormMotivo = document.getElementById("formMotivo");

let respuestasFormPais = document.getElementById("formPais");*/

let mensajeError = document.querySelector(".errorFormulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  console.log(e);
  let formArray = e.target;
  let nombreUsuario = formArray[0];
  /*
  let emailUsuario = formArray[1];
  let motivoUsuario = formArray[2];
  let paisUsuario = formArray[3];

  console.log(nombreUsuario.value);
  console.log(emailUsuario.value);
  console.log(motivoUsuario.value);
  console.log(paisUsuario.value);
*/
  if (nombreUsuario.value === "" || nombreUsuario.value.trim().length === 0) {
    mensajeError.style.display = "block";
    mensajeError.innerText = " El nombre que ingresaste no es valido";
    mensajeError.style.color = "red";
  } else {
    mensajeError.style.display = "none";
  }
  /*
  if (emailUsuario.value === "" || emailUsuario.value.trim().length === 0) {
    mensajeError.style.display = "block";
    mensajeError.innerText = " El email que ingresaste no es valido";
    mensajeError.style.color = "red";
  } else {
    mensajeError.style.display = "none";
  }

  if (motivoUsuario.value === "Suggestion") {
    alert("Seleccionaste Suggestion");
  } else if (motivoUsuario.value === "Complaint") {
    alert("Seleccionaste Complaint");
  } else alert("Seleccionaste Other");
  */
}
