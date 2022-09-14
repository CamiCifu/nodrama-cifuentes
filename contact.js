//constructor para creacion de objetos

function consultasEnviadas(nombre, email, motivo, pais, mensaje) {
  this.nombre = nombre;
  this.email = email;
  this.motivo = motivo;
  this.pais = pais;
  this.mensaje = mensaje;
}

let respuestasAcumuladasDeconsultas = [];

let formulario = document.getElementById("formularioContact");
let mensajeError = document.querySelector(".errorFormulario");
let mensajeError1 = document.querySelector(".errorFormulario1");
let mensajeError2 = document.querySelector(".errorFormulario2");
let mensajeError3 = document.querySelector(".errorFormulario3");
let mensajeError4 = document.querySelector(".errorFormulario4");
let alertaSubmit = document.getElementById("formSubmit");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
  event.preventDefault();
  let formArray = event.target;

  let [
    nombreUsuario,
    emailUsuario,
    motivoUsuario,
    paisUsuario,
    mensajeUsuario,
  ] = formArray;
  console.log(formArray);

  if (nombreUsuario.value === "" || nombreUsuario.value.trim().length === 0) {
    mensajeError2.style.display = "block";
    mensajeError2.innerText = " El nombre que ingresaste no es valido";
    mensajeError2.style.color = "red";
    console.log("el nombre no es correcto");
    return false;
  } else {
    mensajeError2.style.display = "none";
  }

  if (emailUsuario.value === "" || emailUsuario.value.trim().length === 0) {
    mensajeError3.style.display = "block";
    mensajeError3.innerText = " El email que ingresaste no es valido";
    mensajeError3.style.color = "red";
    console.log("el mail no es correcto");
    return false;
  } else {
    mensajeError3.style.display = "none";
  }

  if (motivoUsuario.value === "") {
    mensajeError4.style.display = "block";
    mensajeError4.innerText = " Selecciona un motivo de consulta";
    mensajeError4.style.color = "red";
    console.log("el motivo no es correcto");
    return false;
  } else {
    mensajeError4.style.display = "none";
  }

  if (
    paisUsuario.value === "" ||
    paisUsuario.value.trim().length === 0 ||
    paisUsuario.value === "Country"
  ) {
    mensajeError1.style.display = "block";
    mensajeError1.innerText = " Selecciona un pais";
    mensajeError1.style.color = "red";
    console.log("el pais no es correcto");
    return false;
  } else {
    mensajeError1.style.display = "none";
  }

  if (mensajeUsuario.value === "" || mensajeUsuario.value.trim().length < 10) {
    mensajeError.style.display = "block";
    mensajeError.innerText = " Escribi un mensaje valido";
    mensajeError.style.color = "red";
    console.log("el mensaje no es correcto");
    return false;
  } else {
    mensajeError.style.display = "none";

    respuestasAcumuladasDeconsultas.push(
      new consultasEnviadas(
        nombreUsuario.value,
        emailUsuario.value,
        motivoUsuario.value,
        paisUsuario.value,
        mensajeUsuario.value
      )
    );
    console.log(respuestasAcumuladasDeconsultas);

    let guardaLocaldeConsultas = (clave, valor) => {
      localStorage.setItem(clave, valor);
    };
    guardaLocaldeConsultas(
      "Lista de consultas",
      JSON.stringify(respuestasAcumuladasDeconsultas)
    );
    console.log(typeof respuestasAcumuladasDeconsultas);
    console.log(typeof guardaLocaldeConsultas);

    let MensajesEnviados = "";
    //adicion de operador ternario (funcion reducida)
    respuestasAcumuladasDeconsultas != ""
      ? (MensajesEnviados = "Hay mensajes para leer")
      : (MensajesEnviados = "No hay mensajes para leer");
    console.log(MensajesEnviados);
    swal({
      title: "Thank you!",
      text: "Your consult has been sent!",
      icon: "success",
      button: "OK",
    });
    formulario.reset();
  }

  /*
      //storage
      let respuestasFormGuardada = JSON.stringify(respuestasAcumuladasDeconsultas);
      sessionStorage.setItem("respuestaUsuario", respuestasFormGuardada);
      let MensajesEnviados = "";*/

  //deberia crear un array que vaya uniendo estos objetos de respuestas del form
  //usamos spread
  /*
  const respuesta2 = { ...respuestaFormulario };
  console.log(respuesta2);
*/
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
