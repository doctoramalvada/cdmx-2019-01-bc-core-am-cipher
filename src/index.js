const button = document.getElementById("boton");
const llamado = document.getElementById("resultado");
//llame a reconocerel boton y al resultado que se obtendra
      

button.addEventListener("click",()=>{
      let text= document.getElementById("texto");
      let num=document.getElementById("numero");
      let enlace= window.cipher.encode(num,text);
llamado.innerHTML= enlace;
/*llamo a la accion del boton y defino la variables del texto, el numero 
por su id y la variable que enlace el cipher  y llamo al html*/
    
    
      }); 

      