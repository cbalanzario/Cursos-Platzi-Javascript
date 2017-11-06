function platzom(str) {
    let translation = str
    //Si la palabra termina en "ar" se quitan esos caracteres
    if(str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0,-2)//Desde el final quita 2 caracteres
    }
    //Si la palabra inicia con "z" se le añada "pe" al final
    if(str.toLowerCase().startsWith('z')) {
        translation += 'pe' //a lo que ya tenías (+=) añadele "pe"
    }
    /*Si la palabra traducida tienen 10 o más letras la partimos a la mitad
    y añadir con un guion medio */
    largo = translation.length
    if(largo >= 10){
        const primera = translation.slice(0,Math.round(largo / 2))
        const segunda = translation.slice(Math.round(largo / 2))
        translation = `${primera}-${segunda}`
    }
    /*Si la palabra original es un palindromo (se lee igual de adelante hacía
    atrás), ninguna regla anterior cuenta y se devuelve la misma palabra
    intercalando mayúsculas y minúsculas*/
    const reverse = (str) => str.split('').reverse().join('')

    function minMay(str){
        const length = str.length
        let translation = ''
        let mayus = true
        for (let i = 0; i < length; i++){
            const char = str.charAt(i)
            // a translation lo vamos a concatenar, preguntamos si mayus es
            // true, si lo es se pasa a mayus sino a minus
            // ? -> if : -> else
            translation += mayus ? char.toUpperCase() : char.toLowerCase()
            mayus = !mayus //le cambiamos el valor
        }
        return translation
    }

    if (str == reverse(str)) {
        return minMay(str)
    }



    return(translation)
}

console.log(platzom("Programar"))// Program
console.log(platzom("Zorro"))// Zorope
console.log(platzom("Zarpar"))// Zarppe
console.log(platzom("abecedario"))// abece-dario
console.log(platzom("sometemos"))// SoMeTeMoS (palindromo)
