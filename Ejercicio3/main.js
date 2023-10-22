const arreglo = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];

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

function ordenamientoInsercion(array) {
  let posicion = undefined;
  let valorPosicion = undefined;
  for (let i = 1; i < array.length; i++) {
    posicion = i;
    valorPosicion = array[i];
    while (posicion > 0 && array[posicion - 1] > valorPosicion) {
      array[posicion] = array[posicion - 1];
      posicion--;
    }
    array[posicion] = valorPosicion;
  }
}

function numeroMasGrande(array){
    ordenamientoBurbuja(array);

    return array.length - 1;
}

console.log(`El número más grande es: ${numeroMasGrande(arreglo)}`);
