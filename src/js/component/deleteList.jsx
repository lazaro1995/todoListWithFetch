import React, { useState, useEffect, useContext } from "react";
    
    var taskstest = []
const DeleteList = (tasks, index, setTasks) => {
     tasks = tasks.filter(task => task.label !== tasks[index].label)
     console.log(tasks)
    for(let i= 0; i<tasks.length;i++){
        taskstest[i] = {label:tasks[i].label, done:false}
    }
fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
    method: "PUT",
    body: JSON.stringify(taskstest),
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
      console.log(body)
      //esto imprimirá en la consola el objeto exacto recibido del servidor
  })
  .catch(error => {
      //manejo de errores
      console.log(error);
  });
  return(
    setTasks = tasks
    )
}

export default DeleteList