
/*
  const request = await fetch('mascota/mostrarmascotas', {
    method: 'GET',
    headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
    }

  });
  const mascotas = await request.json(); //lo transforman a json




      console.log(mascotas);

   spinner.style.display = "block";

   if(i >= offset && i<=limit){

       //console.log(mascota);

       //mascota.nombre,mascota.edadMascota,mascota.tipoAnimal,mascota.sexo,mascota.tamanioMascota,mascota.usuario,mascota.descripcion,mascota.foto

       const col = document.createElement('div')
       col.className ="col"
       col.setAttribute("data-aos","fade-up") //efecto de las cards

       const card = document.createElement('div')
       card.className ="card shadow-sm"

       const card_body = document.createElement('div')
       card_body.className = "card-body"

       const img = document.createElement('img')
       img.src = "/upload/"+mascota.foto //cambiar luego de prueba con placeHolder

       const nombre = document.createElement('h5')
       nombre.className = "card-title text-center text-dark"
       nombre.textContent = mascota.nombre  //cambiar luego de prueba con placeHolder

       const descripcion = document.createElement('p')
       descripcion.className = "card-title text-center text-dark"
       descripcion.textContent = "" //cambiar luego de prueba con placeHolder

       const botones = document.createElement('div')
       botones.className = "d-flex justify-content-center align-items-center"

       const botonesInterno = document.createElement('div')
       botonesInterno.className = "btn-group d-flex justify-content-center"

       const boton1 = document.createElement('button')
       boton1.className = "btn btn-primary botones-cards"
       boton1.textContent = "Leer Mas"
       boton1.setAttribute("data-toggle","modal")
       boton1.setAttribute("data-target","#exampleModalCenter")
       boton1.setAttribute("onclick",'CargarUnaMascota(`'+mascota.id+'`)') //cambiar por el metodo de consulta
       console.log(mascota.id)

       //const boton2 = document.createElement('a')
       //boton2.className = "btn btn-primary ms-2"
       //boton2.textContent = "Sobre Mi"

       botonesInterno.append(boton1)

       botones.append(botonesInterno)

       card_body.append(nombre,descripcion,botones)

       card.append(img,card_body)

       col.append(card)

       row.append(col)

   }

   i++;


fetch("../assets/Data/Courses.json")
  .then(response => { 
      const data = response.json();
      var length = Object.keys(data.employees).length;
    var Text = new Array();
    for(let i = 0; i < length; i++) 
    {
        //document.getElementById('test').innerHTML += "<br>"+data.employees[i].firstName + " " + data.employees[i].lastName ;
        Text[i] = data.employees[i].firstName+ " " + data.employees[i].lastName ;
        console.log(Text[i]);
    } 
    })
  .then(data => console.log(data))
  .catch(error => console.log(error));
  
*/

$(document).ready(function () {

  cargarChat();

});

function cargarChat() {


  fetch("Chat.json")

    .then(chatJson => {
      return chatJson.json();

    })

    .then(jsondata =>  console.log(jsondata));


}