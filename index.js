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
