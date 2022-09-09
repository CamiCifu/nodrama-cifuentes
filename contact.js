/*
//PRACTICA ARRAYS Y OBJETOS
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

//VERSION FINAL

let formulario = document.getElementById("formularioContact");

let respuestasFormName = document.getElementById("formName");

let respuestasFormEmail = document.getElementById("formEmail");

let respuestasFormMotivo = document.getElementById("formMotivo");

let respuestasFormPais = document.getElementById("formPais");

let respuestasFormMensaje = document.getElementById("formMensaje");

let mensajeError = document.querySelector(".errorFormulario");

let mensajeError1 = document.querySelector(".errorFormulario1");

let mensajeError2 = document.querySelector(".errorFormulario2");

let mensajeError3 = document.querySelector(".errorFormulario3");

let mensajeError4 = document.querySelector(".errorFormulario4");

let alertaSubmit = document.getElementById("formSubmit");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  console.log(e);
  let formArray = e.target;

  let [
    nombreUsuario,
    emailUsuario,
    motivoUsuario,
    paisUsuario,
    mensajeUsuario,
  ] = formArray;
  console.log(nombreUsuario.value);

  function validarMensajeForm() {
    if (
      mensajeUsuario.value === "" ||
      mensajeUsuario.value.trim().length < 10
    ) {
      mensajeError.style.display = "block";
      mensajeError.innerText = " Escribi un mensaje valido";
      mensajeError.style.color = "red";
    } else {
      mensajeError.style.display = "none";
    }
  }

  function validarPaisForm() {
    if (
      paisUsuario.value === "" ||
      paisUsuario.value.trim().length === 0 ||
      paisUsuario.value === "Country"
    ) {
      mensajeError1.style.display = "block";
      mensajeError1.innerText = " Selecciona un pais";
      mensajeError1.style.color = "red";
    } else {
      mensajeError1.style.display = "none";
    }
  }

  function validarNameForm() {
    if (nombreUsuario.value === "" || nombreUsuario.value.trim().length === 0) {
      mensajeError2.style.display = "block";
      mensajeError2.innerText = " El nombre que ingresaste no es valido";
      mensajeError2.style.color = "red";
    } else {
      mensajeError2.style.display = "none";
    }
  }

  function validarEmailForm() {
    if (emailUsuario.value === "" || emailUsuario.value.trim().length === 0) {
      mensajeError3.style.display = "block";
      mensajeError3.innerText = " El email que ingresaste no es valido";
      mensajeError3.style.color = "red";
    } else {
      mensajeError3.style.display = "none";
    }
  }

  function validarMotivoForm() {
    if (motivoUsuario.value === "") {
      mensajeError4.style.display = "block";
      mensajeError4.innerText = " Selecciona un motivo de consulta";
      mensajeError4.style.color = "red";
    } else {
      mensajeError4.style.display = "none";
    }
  }

  validarMensajeForm();
  validarPaisForm();
  validarNameForm();
  validarEmailForm();
  validarMotivoForm();

  const respuestaFormulario = {
    nombre: nombreUsuario.value,
    email: emailUsuario.value,
    motivo: motivoUsuario.value,
    pais: paisUsuario.value,
    mensaje: mensajeUsuario.value,
  };

  const respuesta2 = { ...respuestaFormulario };
  console.log(respuesta2);

  //storage
  let respuestaFormGuardada = JSON.stringify(respuestaFormulario);
  let MensajesEnviados = "";
  if (respuestaFormGuardada != "") {
    MensajesEnviados = "Hay mensajes para leer";
    console.log(MensajesEnviados);
  }

  sessionStorage.setItem("respuestaUsuario", respuestaFormGuardada);

  respuestaFormGuardada != ""
    ? (MensajesEnviados = "Hay mensajes para leer")
    : (MensajesEnviados = "No hay mensajes para leer");
  console.log(MensajesEnviados);

  alertaSubmit.onclick = (e) => {
    swal({
      title: "Thank you!",
      text: "Your consult has been sent!",
      icon: "success",
      button: "OK",
    });
  };
}

/*
FETCH
let url = "http://hp-api.herokuapp.com/api/characters";
let agregarPersonaje = document.getElementById("nombreHP");
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const daniel = json[0];
    console.log(daniel.actor);
    console.log(typeof daniel);
    agregarPersonaje.innerHTML = "<h2> ${daniel.actor} </h2>";
  });
*/
