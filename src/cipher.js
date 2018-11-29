const code = (messencrypt, offset) => {
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
    else if (numberCodeAscii === 32){
<<<<<<< HEAD
      cifrado+= " ";
=======
      cypher+= " ";
    }
    else {
      cypher+= messencrypt.charAt(i);

>>>>>>> 77741f8223b742f47ebaf83956f6f0add3b1784f
    }
  }
  return cypher;
}

const decipher = (messencrypt, offset) => {
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
    else if (numberCodeAscii ===32){
<<<<<<< HEAD
      decifrado+= " ";
=======
      deciphered+= " ";
    }
    else {
      deciphered+= messencrypt.charAt(i);

>>>>>>> 77741f8223b742f47ebaf83956f6f0add3b1784f
    }
}
   return deciphered;
}


window.cipher = {
  encode: code,
  decode: decipher
};