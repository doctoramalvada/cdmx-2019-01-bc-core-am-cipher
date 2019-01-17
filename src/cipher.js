window.cipher = {
 encode: (num,text)=>{
   let str = text.value;
   let mayusculas= str.toUpperCase();
   offset = num.value;
   /* defino la funcion encode que consta del numer y texto ingresados 
   con texto.value creo una nueva variable a la que volvere a mayusculas las letras
   tambien obtengo el offset que es un parametro para la funcion de conversion de ascci a letras
   en la sig funcion*/
   let textNuevo= "";
/*aqui saldra el texto cifrado */
   for(let i=0; i<mayusculas.length; i++){
     let letraAscii= mayusculas.charCodeAt(i);
     console.log(letraAscii);
     let conversion=(letraAscii-65+parseInt(offset))%26+65;
     console.log(conversion);
     let obtenido=String.fromCharCode(conversion);
     console.log(obtenido);
     textNuevo += obtenido;
    }
    /*el charcodeat me da el valor numerico  de la letra ingresadapongo la funcion para que convierta las letras en ascci */
 return textNuevo
  },
  
  decode:(num,textode)=>{
    let strde = textode.value;
   let mayusculasde= strde.toUpperCase();
   let offset = num.value;
   let resultadodescifrado= "";
/*aqui saldra el texto descifrado */
   for(let i=0; i<mayusculasde.length; i++){
     let letraAscii= mayusculasde.charCodeAt(i);
     
     let conversionde=(letraAscii+65-parseInt(offset))%26+65;
     let listode=String.fromCharCode(conversionde);
     console.log(listode);
     resultadodescifrado += listode;
   }

 return resultadodescifrado

  

}
};

