const arreglo = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];

function ordenamientoBurbuja(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      let tmp = undefined;

      if (array[j] > array[j + 1]) {
        tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
}

function ordenamientoInsercion(array){
    let pos = undefined;
    let tmp = undefined;
    for (let i = 0; i < array.length - 1; i++) {
        pos = i;
        tmp = array[i];
        while(pos > 0 && array[pos - 1] > tmp) {
            array[pos] = array[pos - 1];
            pos--;
        }

        array[pos] = tmp;
    }
}

function busquedaSecuencial(array) {

    //defino la longitud inicial del arreglo
    const numeros = new Array(array.length);

    // el método fill, nos permite rellenar un arreglo especificand un VALOR
    // el primer argumento es el VALOR, el segundo parametro es desde que 
    // posición se rrellenara el arreglo, y el TERCER parametro la posición final hasta la cual se rrelenara el arreglo con el valor indicado.
    numeros.fill(0); //por defecto rellenaremos en su totalidad todo el array con 0's
    
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i === array[j]) {
            
        }
    }
  }
}

function busquedaBinaria(array) {}

//primero ordenamos el arreglo
ordenamientoBurbuja(arreglo);
console.log(arreglo);
console.log("\n");
