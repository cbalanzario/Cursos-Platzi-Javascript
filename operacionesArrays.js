function suma(...numeros) {//Método tradicional
    // let acumulados = 0
    // for(let i=0; i < numeros.length; i++) {
    //     acumulados += numeros[i]
    // }
    return numeros.reduce(function (acumulados, numero) {
        acumulados += numero
        return acumulados
    }, 0)
}

suma (4, 8, 12, 8954, 7)
