import React from "react";

const GetList = (state) =>{
fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
.then(resp => {
    console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
    console.log(resp.status); // el código de estado = 200 o código = 400 etc.
    return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
})
.then(body => {
    //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
    state(body);
    console.log(body) //esto imprimirá en la consola el objeto exacto recibido del servidor
})
.catch(error => {
    //manejo de errores
    console.log(error);
});
}
export default GetList