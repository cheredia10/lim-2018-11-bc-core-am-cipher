// Creando variables a utilizar

const mostrar= document.getElementById("Textoamostrar")
const buttonEncriptar=document.getElementById("encriptar")
const buttonDesencriptar=document.getElementById("desencriptar")

//Creando evento del botón CRIFRAR

buttonEncriptar.addEventListener('click', () => {
  //Creando variables que almacenan los datos de los input
  let offset= document.getElementById('clave').value;
  let mensajito= document.getElementById('mensj').value;
  mostrar.innerHTML=cipher.encode(mensajito, offset);
 });


//Creando evento del botón DECIFRAR
 
 buttonDesencriptar.addEventListener('click', () =>{

//Creando variables que almacenan los datos de los input
  let offset= document.getElementById('clave').value;
  let mensajito= document.getElementById('mensj').value;
  mostrar.innerHTML=cipher.decode(mensajito, offset);
 });