
// creando el evento de Cifrado
const buttonEncriptar=document.getElementById("encriptar")
 
 buttonEncriptar.addEventListener('click', cifrar);

// creando la función Crifrar
function cifrar(){

  //Creando variables que almacenan los datos de los input
  let offset= document.getElementById('clave').value;
  let mensajito= document.getElementById('mensj').value;
  let cifrado="";

  for(let i=0; i<mensajito.length ; i++) { //recorrido de letras a cifrar//
    let numberCodeAscii= mensajito.charCodeAt(i);//obtenemos el Código ASCII

    if (numberCodeAscii>=65 && numberCodeAscii<=90){ // condición codigo ASCII (Valores Mayusculas)

      let ubicacionCesar= (numberCodeAscii - 65 + parseInt(offset)) % 26 + 65;
      let palabraCifrada= String.fromCharCode(ubicacionCesar);

      cifrado+= palabraCifrada; //acumular las letras cifradas//
    }
  }
   document.getElementById("Textoamostrar").innerHTML = cifrado
}

