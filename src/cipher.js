const cifrar = (mensajito, offset) => {
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
      let ubicacionCesarmin = (numberCodeAscii - 97 + parseInt(offset)) % 26 + 97;
      let palabraCifradamin = String.fromCharCode(ubicacionCesarmin);
      cifrado+= palabraCifradamin;
    }
    else if (numberCodeAscii === 32){
      cifrado+= " ";
    }
  }
  return cifrado;
}

const decifrar = (mensajito, offset) => {
 let decifrado="";

  for(let i=0; i<mensajito.length ; i++) { //recorrido de letras a decifrar//
    let numberCodeAscii= mensajito.charCodeAt(i);//obtenemos el Código ASCII

    if (numberCodeAscii>=65 && numberCodeAscii<=90){ // condición codigo ASCII (Valores Mayusculas)

      let ubicacionCesar= ((numberCodeAscii - 90) - parseInt(offset)) % 26 + 90;
      let palabraDecifrada= String.fromCharCode(ubicacionCesar);

      decifrado+= palabraDecifrada; //acumular las letras decifradas//
    }
    //condición para letras minúsculas

    else if (numberCodeAscii>=97 && numberCodeAscii<=122) {
      let ubicacionCesarmin = ((numberCodeAscii - 122) - parseInt(offset)) % 26 + 122 ;
      let palabraDecifradamin = String.fromCharCode(ubicacionCesarmin);
      decifrado+= palabraDecifradamin;
    }
    else if (numberCodeAscii ===32){
      decifrado+= " ";
    }
}
   return decifrado;
}


window.cipher = {
  encode: cifrar,
  decode: decifrar
};