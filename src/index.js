
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

    //condición para mayúsculas

    if (numberCodeAscii>=65 && numberCodeAscii<=90){ // condición codigo ASCII (Valores Mayusculas)

      let ubicacionCesar= (numberCodeAscii - 65 + parseInt(offset)) % 26 + 65;
      let palabraCifrada= String.fromCharCode(ubicacionCesar);

      cifrado+= palabraCifrada; //acumular las letras cifradas//
    }
    //condición para lentras minúsculas

    else if (numberCodeAscii>=97 && numberCodeAscii<=122) {
      let ubicacionCesarmin = (numberCodeAscii + 97 - parseInt(offset)) % 26 + 97;
      let palabraCifradamin = String.fromCharCode(ubicacionCesarmin);
      cifrado+= palabraCifradamin;
    }
    else if (numberCodeAscii==32){
      let space=" ";
      cifrado+= space;
    }
  }
   document.getElementById("Textoamostrar").innerHTML = cifrado
}

// creando el evento de Decifrar
const buttonDesencriptar=document.getElementById("desencriptar")
 
 buttonDesencriptar.addEventListener('click', decifrar);

// creando la función Crifrar
function decifrar(){

  //Creando variables que almacenan los datos de los input
  let offset= document.getElementById('clave').value;
  let mensajito= document.getElementById('mensj').value;
  let decifrado="";

  for(let i=0; i<mensajito.length ; i++) { //recorrido de letras a decifrar//
    let numberCodeAscii= mensajito.charCodeAt(i);//obtenemos el Código ASCII

    if (numberCodeAscii>=65 && numberCodeAscii<=90){ // condición codigo ASCII (Valores Mayusculas)

      let ubicacionCesar= ((numberCodeAscii - 90) - parseInt(offset)) % 26 + 90;
      let palabraDecifrada= String.fromCharCode(ubicacionCesar);

      decifrado+= palabraDecifrada; //acumular las letras decifradas//
    }
  }
   document.getElementById("Textoamostrar").innerHTML = decifrado
}
