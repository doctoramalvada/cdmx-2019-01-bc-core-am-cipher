window.cipher = {
 encode: (num,text)=>{
   let str = text.value;
   let mayusculas= str.toUpperCase();
   offset = num.value;
   /* defino la funcion */
   let textNuevo= "";

   for(let i=0; i<mayusculas.length; i++){
     let letraAscii= mayusculas.charCodeAt(i);
     console.log(letraAscii);
     let conversion=(letraAscii-65+parseInt(offset))%26+65;
     console.log(conversion);
     let obtenido=String.fromCharCode(conversion);
     console.log(obtenido);
     textNuevo += obtenido;
    }
 return textNuevo
  },
  
  decode:()=>{

  }

};

