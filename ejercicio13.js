//Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
//Finalmente retorna el array.De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
function findArrayIndex(mainCharacters,text) {
  for (let i = 0; i < mainCharacters.length; i++) {
   if(mainCharacters[i]=== text){
    return i;}
    
   }
   return -1
    
  }
  function removeItem(mainCharacters, text) {
    
    const eliminar = findArrayIndex(mainCharacters, text);
    
    
    if (eliminar !== -1) {
     
      mainCharacters.splice(eliminar, 1);
    }
    
    
    return mainCharacters;
  }


  console.log(removeItem(mainCharacters, "Han Solo")); 
  console.log(removeItem(mainCharacters, "Yoda")); 
  console.log(removeItem(mainCharacters, "Leia")); 
  console.log(mainCharacters); 
    