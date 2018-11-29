// Creando variables a utilizar

const mostrar= document.getElementById("Textoamostrar")
const buttonEncriptar=document.getElementById("encriptar")
const buttonDesencriptar=document.getElementById("desencriptar")
const buttonGo=document.getElementById("Go")
const buttonHome=document.getElementById("Home")

//Creando evento del botón CRIFRAR

buttonEncriptar.addEventListener('click', () => {
  //Creando variables que almacenan los datos de los input
  let offset= document.getElementById('clave').value;
  let mensajito= document.getElementById('messege').value;
  mostrar.innerHTML=cipher.encode(mensajito, offset);
 });

//Creando evento del botón DECIFRAR
 
 buttonDesencriptar.addEventListener('click', () =>{

//Creando variables que almacenan los datos de los input
  let offset= document.getElementById('clave').value;
  let mensajito= document.getElementById('messege').value;
  mostrar.innerHTML=cipher.decode(mensajito, offset);
 });

 //Creando boton Adelante
 buttonGo.addEventListener('click', () =>{
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='block';
 });

//Creando boton Home
 buttonHome.addEventListener('click', () =>{
  document.getElementById('page1').style.display='block';
  document.getElementById('page2').style.display='none';
 });