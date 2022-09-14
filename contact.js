//constructor para creacion de objetos

function consultasEnviadas(nombre, email, motivo, pais, mensaje) {
  this.nombre = nombre;
  this.email = email;
  this.motivo = motivo;
  this.pais = pais;
  this.mensaje = mensaje;
}

let formulario = document.getElementById("formularioContact");

//no entiendo para que busco toods estos ID
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

var validacion = false;

function validarFormulario(event) {
  event.preventDefault();
  let formArray = event.target;
  console.log(typeof validacion);
  console.log(validacion);

  let [
    nombreUsuario,
    emailUsuario,
    motivoUsuario,
    paisUsuario,
    mensajeUsuario,
  ] = formArray;
  console.log(formArray);

  while (
    nombreUsuario.value === "" ||
    nombreUsuario.value.trim().length === 0 ||
    paisUsuario.value === "" ||
    emailUsuario.value === "" ||
    emailUsuario.value.trim().length === 0 ||
    motivoUsuario.value === "" ||
    mensajeUsuario.value === ""
  ) {
    if (nombreUsuario.value === "" || nombreUsuario.value.trim().length === 0) {
      console.log("estamos validando el nombre");
      mensajeError2.style.display = "block";
      mensajeError2.innerText = " El nombre que ingresaste no es valido";
      mensajeError2.style.color = "red";
      validacion = false;
      console.log(validacion);
      console.log(typeof validacion);
      return false;
    } else if (paisUsuario.value === "") {
      mensajeError2.style.display = "none";
      mensajeError1.style.display = "block";
      mensajeError1.innerText = " Selecciona un pais";
      mensajeError1.style.color = "red";
      validacion = false;
      console.log(validacion);
      return false;
    } else if (
      emailUsuario.value === "" ||
      emailUsuario.value.trim().length === 0
    ) {
      mensajeError1.style.display = "none";
      mensajeError3.style.display = "block";
      mensajeError3.innerText = " El email que ingresaste no es valido";
      mensajeError3.style.color = "red";
      validacion = false;
      console.log(validacion);
      return false;
    } else if (motivoUsuario.value === "") {
      mensajeError3.style.display = "none";
      mensajeError4.style.display = "block";
      mensajeError4.innerText = " Selecciona un motivo de consulta";
      mensajeError4.style.color = "red";
      validacion = false;
      console.log(validacion);
      return false;
    } else if (mensajeUsuario.value === "") {
      mensajeError4.style.display = "none";
      mensajeError.style.display = "block";
      mensajeError.innerText = " Escribi un mensaje valido";
      mensajeError.style.color = "red";
      validacion = false;
      console.log(validacion);
      return false;
    } else if (mensajeUsuario.value != "") {
      mensajeError.style.display = "none";
      validacion = true;
      console.log(validacion);
      console.log(typeof validacion);
      //pido otro click
      console.log(validacion);

      alertaSubmit.onclick = (event) => {
        swal({
          title: "Thank you!",
          text: "Your consult has been sent!",
          icon: "success",
          button: "OK",
        });
        validacion = false;
        console.log(validacion);
        console.log(typeof validacion);
      };
    }
  }
  //Guardo la información

  const respuestaFormulario = new consultasEnviadas(
    nombreUsuario.value,
    emailUsuario.value,
    motivoUsuario.value,
    paisUsuario.value,
    mensajeUsuario.value
  );
  console.log(respuestaFormulario);
  //storage
  let respuestaFormGuardada = JSON.stringify(respuestaFormulario);
  let MensajesEnviados = "";
  if (respuestaFormGuardada != "") {
    MensajesEnviados = "Hay mensajes para leer";
    console.log(MensajesEnviados);
    console.log(respuestaFormGuardada);
  }
  formulario.reset();
  formArray = [];
  console.log(formArray);
  validacion == false;
  return;
}

//deberia crear un array que vaya uniendo estos objetos de respuestas del form
//usamos spread
/*
  const respuesta2 = { ...respuestaFormulario };
  console.log(respuesta2);
*/

/*
  const respuestaFormulario = new consultasEnviadas(
    nombreUsuario.value,
    emailUsuario.value,
    motivoUsuario.value,
    paisUsuario.value,
    mensajeUsuario.value
  );
  //storage
  let respuestaFormGuardada = JSON.stringify(respuestaFormulario);
  let MensajesEnviados = "";
  if (respuestaFormGuardada != "") {
    MensajesEnviados = "Hay mensajes para leer";
    console.log(MensajesEnviados);
  }

  sessionStorage.setItem("respuestaUsuario", respuestaFormGuardada);

  //adicion de operador ternario (funcion reducida)
  respuestaFormGuardada != ""
    ? (MensajesEnviados = "Hay mensajes para leer")
    : (MensajesEnviados = "No hay mensajes para leer");
  console.log(MensajesEnviados);


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

/*
  alertaSubmit.onclick = (e) => {
    swal({
      title: "Thank you!",
      text: "Your consult has been sent!",
      icon: "success",
      button: "OK",
    });
  };*/

//copia
/*
  function validarNameForm() {
    if (nombreUsuario.value === "" || nombreUsuario.value.trim().length === 0) {
      mensajeError2.style.display = "block";
      mensajeError2.innerText = " El nombre que ingresaste no es valido";
      mensajeError2.style.color = "red";
      validacion = false;
    } else {
      mensajeError2.style.display = "none";
      validacion = true;
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
      validacion = false;
    } else {
      mensajeError1.style.display = "none";
      validacion = true;
    }
  }



  function validarEmailForm() {
    if (emailUsuario.value === "" || emailUsuario.value.trim().length === 0) {
      mensajeError3.style.display = "block";
      mensajeError3.innerText = " El email que ingresaste no es valido";
      mensajeError3.style.color = "red";
      validacion = false;
    } else {
      mensajeError3.style.display = "none";
      validacion = true;
    }
  }

  function validarMotivoForm() {
    if (motivoUsuario.value === "") {
      mensajeError4.style.display = "block";
      mensajeError4.innerText = " Selecciona un motivo de consulta";
      mensajeError4.style.color = "red";
      validacion = false;
    } else {
      mensajeError4.style.display = "none";
      validacion = true;
    }
  }

  function validarMensajeForm() {
    if (
      mensajeUsuario.value === "" ||
      mensajeUsuario.value.trim().length < 10
    ) {
      mensajeError.style.display = "block";
      mensajeError.innerText = " Escribi un mensaje valido";
      mensajeError.style.color = "red";
      validacion = false;
    } else {
      mensajeError.style.display = "none";
      validacion = true;
    }
  }

  validarNameForm();
  validarEmailForm();
  validarPaisForm();
  validarMotivoForm();
  validarMensajeForm();

  //deberia crear un array que vaya uniendo estos objetos de respuestas del form
  //usamos spread
  /*
  const respuesta2 = { ...respuestaFormulario };
  console.log(respuesta2);
*/
/*
  if (validacion === true) {
    formularioAEnviar.submit();
    swal({
      title: "Thank you!",
      text: "Your consult has been sent!",
      icon: "success",
      button: "OK",
    });
  }

  const respuestaFormulario = new consultasEnviadas(
    nombreUsuario.value,
    emailUsuario.value,
    motivoUsuario.value,
    paisUsuario.value,
    mensajeUsuario.value
  );
  //storage
  let respuestaFormGuardada = JSON.stringify(respuestaFormulario);
  let MensajesEnviados = "";
  if (respuestaFormGuardada != "") {
    MensajesEnviados = "Hay mensajes para leer";
    console.log(MensajesEnviados);
  }

  sessionStorage.setItem("respuestaUsuario", respuestaFormGuardada);

  //adicion de operador ternario (funcion reducida)
  respuestaFormGuardada != ""
    ? (MensajesEnviados = "Hay mensajes para leer")
    : (MensajesEnviados = "No hay mensajes para leer");
  console.log(MensajesEnviados);



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

/*
  alertaSubmit.onclick = (e) => {
    swal({
      title: "Thank you!",
      text: "Your consult has been sent!",
      icon: "success",
      button: "OK",
    });
  };

  */
