const arreglo = [1, 4, 5, -1, -7, 2, 3, 9];

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

function busquedaBinaria(array, numero){
    let inferior = undefined;
    let superior = undefined;
    let mitad = undefined;

    let bandera = false;

    inferior = 0;
    superior = array.length;

    while (inferior <= superior) {
        mitad = Math.floor((inferior + superior) / 2);

        if (array[mitad] === numero) {
            bandera = true;
            break;
        }

        if (array[mitad] > numero) {
            superior = mitad;
            mitad = Math.floor((inferior + superior) / 2);
        }

        if(array[mitad] < numero){
            inferior = mitad;
            mitad = Math.floor((inferior + superior) / 2);
        }

    }

    if (bandera) {
        console.log(`El número: ${numero}, existe en el arreglo en la posición: ${mitad}`);
    } else {
        console.log(`Èl número: ${numero}, no existe en el arreglo`);
    }

}

//primera solución
function numeroMenor(array){
    //ordenando el arreglo
    ordenamientoInsercion(array);

    busquedaBinaria(array, array[0]);
}


//segunda solción
function numeroMenorDos(array){
    let menor = 0;

    for (const numero of array) {
        
        if (numero < menor) {
            menor = numero;
        }

    }

    return menor;
}

//probando busqueda binaria
//busquedaBinaria(arreglo, 9);

numeroMenor(arreglo);

console.log(`El número menor es: ${numeroMenorDos(arreglo)}`);