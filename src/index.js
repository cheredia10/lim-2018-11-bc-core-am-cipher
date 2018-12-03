// Creando variables a utilizar

const view= document.getElementById("Texttoshow")
const buttonEncrypt=document.getElementById("encrypt")
const buttonDecrypt=document.getElementById("decrypt")
const buttonGo=document.getElementById("Go")
const buttonHome=document.getElementById("Home")

//Creando evento del botón CRIFRAR

buttonEncrypt.addEventListener('click', () => {
  //Creando variables que almacenan los datos de los input
  let offset= document.getElementById('key').value;
  let messencrypt= document.getElementById('messege').value;
  view.innerHTML=cipher.encode(offset, messencrypt);
 });

//Creando evento del botón DECIFRAR
 
 buttonDecrypt.addEventListener('click', () =>{

//Creando variables que almacenan los datos de los input
  let offset= document.getElementById('key').value;
  let messencrypt= document.getElementById('messege').value;
  view.innerHTML=cipher.decode(offset, messencrypt);
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