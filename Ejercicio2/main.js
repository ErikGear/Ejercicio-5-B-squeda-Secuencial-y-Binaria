arreglo = [8, "e", 7, 2, "a", "d", "f", 2, 3, 1, 4, 3];

function letrasNumeros(array) {
  const letras = [];
  array.forEach((item, indice) => {
    if (isNaN(item)) {
      letras.push(item);
    }
  });

  return letras;
}

letras = letrasNumeros(arreglo);
console.log(letras);
console.log(arreglo);
