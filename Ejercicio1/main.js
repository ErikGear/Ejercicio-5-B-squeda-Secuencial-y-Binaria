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

function ordenamientoBurbujaObjetos(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      let tmp = undefined;

      if (array[j].coincidencias > array[j + 1].coincidencias) {
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

function CoincidenciasNumero(id, numero) {
  this.id = id;
  this.numero = numero;
  this.coincidencias = 0;

  this.toString = function () {
    return `Posición: ${this.id}
    Número: ${this.numero} 
    Coincidencias: ${this.coincidencias} \n`;
  };

  this.getNumero = function(){
    return this.numero;
  };
}

function tranformarObjetos(objeto) {
  const listaObjetos = [];

  for (const llave in objeto) {
    listaObjetos.push(new CoincidenciasNumero(llave, objeto[llave]));
  }

  return listaObjetos;
}

function busquedaSecuencial(array) {
  //defino la longitud inicial del arreglo
  const numeros = new Array(array.length);

  // el método fill, nos permite rellenar un arreglo especificando un VALOR
  // el primer argumento es el VALOR, el segundo parametro es desde que
  // posición se rrellenara el arreglo, y el TERCER parametro la posición final hasta la cual se rrelenara el arreglo con el valor indicado.
  numeros.fill(0); //por defecto rellenaremos en su totalidad todo el array con 0's

  ordenamientoBurbuja(array);
  console.log(array);

  const objetoNumeros = { ...array };
  const numerosObjetos = tranformarObjetos(objetoNumeros);

  let numero = numerosObjetos.map((num) => {
    return [num.numero, num];
  });

  let numMapArr = new Map(numero);

  const numerosUnicos = [...numMapArr.values()];
  console.log(numerosUnicos[0].numero);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
      if (i === array[j]) {
        numeros[i] = numeros[i] + 1;
      }
    }
  }



  ordenamientoBurbujaObjetos(numerosObjetos);

  //console.log(numerosObjetos);
  console.log(numeros);

  
}

busquedaSecuencial(arreglo);

