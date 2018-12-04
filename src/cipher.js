const code = (offset, messencrypt) => {
 let cypher="";

for(let i=0; i<messencrypt.length ; i++) { //recorrido de letras a cifrar//
    let numberCodeAscii= messencrypt.charCodeAt(i);//obtenemos el Código ASCII

    //condición para mayúsculas

    if (numberCodeAscii>=65 && numberCodeAscii<=90){ // condición codigo ASCII (Valores Mayusculas)

      let LocationCesar= (numberCodeAscii - 65 + parseInt(offset)) % 26 + 65;
      let wordCifrada= String.fromCharCode(LocationCesar);

      cypher+= wordCifrada; //acumular las letras cifradas//
    }
    //condición para lentras minúsculas

    else if (numberCodeAscii>=97 && numberCodeAscii<=122) {
      let LocationCesarmin = (numberCodeAscii - 97 + parseInt(offset)) % 26 + 97;
      let wordCifradamin = String.fromCharCode(LocationCesarmin);
      cypher+= wordCifradamin;
    }
    // condicion para espacios en blanco
    else if (numberCodeAscii === 32){
      cypher+= " ";
    }
    //condicion para cualquier otro caso
    else {
      cypher+= messencrypt.charAt(i);

    }
  }
  return cypher;
}

const decipher = (offset, messencrypt) => {
 let deciphered="";

  for(let i=0; i<messencrypt.length ; i++) { //recorrido de letras a decifrar//
    let numberCodeAscii= messencrypt.charCodeAt(i);//obtenemos el Código ASCII

    if (numberCodeAscii>=65 && numberCodeAscii<=90){ // condición codigo ASCII (Valores Mayusculas)

      let LocationCesar= ((numberCodeAscii - 90) - parseInt(offset)) % 26 + 90;
      let wordDeciphered= String.fromCharCode(LocationCesar);

      deciphered+= wordDeciphered; //acumular las letras decifradas//
    }
    //condición para letras minúsculas

    else if (numberCodeAscii>=97 && numberCodeAscii<=122) {
      let LocationCesarmin = ((numberCodeAscii - 122) - parseInt(offset)) % 26 + 122 ;
      let wordDecipheredmin = String.fromCharCode(LocationCesarmin);
      deciphered+= wordDecipheredmin;
    }
    //condición para espacios en blanco
    else if (numberCodeAscii ===32){
      deciphered+= " ";
    }
    //condición para cualquier otro caso
    else {
      deciphered+= messencrypt.charAt(i);

    }
}
   return deciphered;
}


window.cipher = {
  encode: code,
  decode: decipher
};