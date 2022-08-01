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
