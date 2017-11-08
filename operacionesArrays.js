//El método reduce() aplica una función a un acumulador y a cada valor de un
//array (de izquierda a derecha) para reducirlo a un único valor
const suma = (...numeros) => numeros.reduce((acumulados, numero)=> acumulados += numero,0)

//Función que nos devolverá el doble de sus números en el array
const dobles = (...numeros) => numeros.map(numero => numero *2 ) //map recibe una función que se va a ejecutar por cada uno de los elementos

//otro método de array es filter, lo podemos usar para encontrar elementos en el arreglo
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)

suma (4, 8, 12, 8954, 7)
dobles (2,3,4)
pares (1,2,3,7,10,11,23)
