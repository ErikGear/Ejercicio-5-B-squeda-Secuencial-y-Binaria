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

function busquedaSecuencial(array) {
  for (let i = 0; i < array.length; i++) {}
}

function busquedaBinaria(array) {}

//primero ordenamos el arreglo
ordenamientoBurbuja(arreglo);
console.log(arreglo);
console.log("\n");
