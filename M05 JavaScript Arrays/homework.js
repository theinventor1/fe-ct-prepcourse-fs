/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   largo = array.length;
   return array[largo-1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en + 1.
   // Tu código:
   largo = array.length;
   for(i=0;i<largo;i++){
      array[i]= array[i]+1;
   }   
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   largo = palabras.join(' ');
   return largo;
}

var aux;
function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:   
   if (array.includes(elemento)==true)  
       return true;
    else 
       return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma=0;
  for (let n of arrayOfNums){
   suma += n;
  }
   return suma; 
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   lr = resultadosTest.length;
   let suma = 0;
   for (let n of resultadosTest){
      suma += n;
   }
   return suma/lr;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:   
   //max = getMaxOfArray[arrayOfNums];
   max = arrayOfNums[0];
   for(i=0;i<arrayOfNums.length;i++){
    if (arrayOfNums[i]>max){
      max = arrayOfNums[i];
    }
   }   
   return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
  // var arguments = [];
      if (arguments.length=1) {
         return arguments[0];
      } else {
        let mult = 1;
        for (i=0; i<arguments.length; i++ ){
           mult = mult * arguments[i];
        }
        return mult;
      }      
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
let cuenta = 0;
for (i=0; i<array.length; i++){
if (array[i]>18){
   cuenta++;
}
}
return cuenta;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if ((numeroDeDia==7)||(numeroDeDia==1))
   {
      return "Es fin de semana";
   }else
   {
      return "Es dia laboral";
   };
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   let valorString=num.toString();  //transformo el numero a string
   if (valorString.charAt(0)==9){    // si el primer caracter indice 0 es 9 , entonces
      return true
   }else return false;  
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   partida=array[0];
   for (i=1; i<array.length; i++){
      if (partida==array[i]) {
         return true;}
      else {
         return false;
      }
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
 var copia = [];
  a = 0;
  b = 0;
  c = 0;
  for (i = 0; i < array.length; i++){
   switch (array[i]){
    case "Enero":
      console.log('case enero 1')
      copia.push("Enero"); //pone  'enero' al inicio del array      
      a = 1;
      break;
    case "Marzo":
      console.log('case marzo 2')
      copia.push("Marzo");
      b = 1;
      break;
    case "Noviembre":    
      console.log('case noviembre 3')
      copia.push("Noviembre");
      c = 1;
      break;     
   }
  // return copia; 
  }
  if(a==0 || b==0 || c==0){
   console.log('No se encontraron los meses pedidos')
   return "No se encontraron los meses pedidos";
  }
  console.log('El arreglo:', array);
  console.log('El copia:', copia); 
  return copia;
}
var arreglo = ["Enero","Marzo","Noviembre","Octubre","Enero","Febrero","Abril","Mayo","YaloVi","Trok"];
mesesDelAño(arreglo);
console.log('trok trok');

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = [];
   for (i=0;i<11;i++){
      tabla.push(i*6);     
    }
 return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
const copiax=[];
for (i=0; i<array.length; i++){
   if(array[i] > 100){
      copiax.push(array[i]);
   }
}
  console.log('trok:'+ copiax);
  return copiax;

  
}
mayorACien(1,2,4,5,101,120);


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const arreglo1 = [];
   for (i=0; i<10; i++){
     num = num + 2;
     arreglo1.push(num);
     if(num === i){
      console.log('aqui ejecuta el num===i  => break ');
      break;     
     }  
   }
   console.log('Se interrumpió la ejecución, porque num:'+ num + '.e i:'+ i + '.');
   console.log('arreglo1:'+ arreglo1 + '.');
   return arreglo1;
   return "Se interrumpió la ejecución";
}
breakStatement(19);

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const arraux = [];
   for (i=0; i<10; i++){
      num = num + 2;
      arraux.push = num;
      if(i === 4){
        continue;
      }                        
    } 
    return arraux;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
