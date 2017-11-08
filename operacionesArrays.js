function suma(...numeros) {
    return numeros.reduce(function (acumulados, numero) {//El método reduce() aplica una
                                                        //función a un acumulador y a cada valor de un
                                                        //array (de izquierda a derecha) para reducirlo
                                                        //a un único valor
        acumulados += numero
        return acumulados
    }, 0)
}

//Función que nos devolverá el doble de sus números en el array
const dobles = (...numeros) => numeros.map(numero => numero *2 ) //map recibe una función que se va a ejecutar por cada uno de los elementos
suma (4, 8, 12, 8954, 7)
dobles (2,3,4)

//otro método de array es filter, lo podemos usar para encontrar elementos en el arreglo
