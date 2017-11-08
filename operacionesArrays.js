function suma(...numeros) {
    return numeros.reduce(function (acumulados, numero) {//El método reduce() aplica una
                                                        //función a un acumulador y a cada valor de un
                                                        //array (de izquierda a derecha) para reducirlo
                                                        //a un único valor
        acumulados += numero
        return acumulados
    }, 0)
}

function dobles(...numeros) {//Función que nos devolverá el doble de sus números en el array
    /*Código escrito correctamente, aunque se puede reducir y hacerlo más elegante*/
    const resultado = []
    for (let i=0; i<numeros.length; i++){
        resultado.push(numeros[i]*2)
    }
    return resultado
}


suma (4, 8, 12, 8954, 7)
