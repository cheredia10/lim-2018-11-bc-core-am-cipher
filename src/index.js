
// crenado la funcion del boton Cifrar
encriptar.addEventListener('click', () => {
  //Creando variables que almacenan los datos de los input
  const offset= document.getElementById('clave');
  const messege= document.getElementById('mensaje');
  let cifrado=[];

  for(let i=0; i<messege.length; i++) { //recorrido de letras a cifrar//
      let ubicacionCesar=(messege.toUpperCase().charCodeAt(i) - 65 + pareseIn(offset)) % 26 + 65;
      let palabraCifrada= String.fromCharCode(ubicacionCesar);

    cifrado+= palabraCifrada; //acumular las letras cifradas//
    }
    console.log(cifrado);
});
