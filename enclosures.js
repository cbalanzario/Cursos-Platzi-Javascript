//Los closure son funciones que recuerdan el entorno en el cual fuerón creadas,
//esto quiere decir que al llamar la función van a recordar las variables que
//tenian en ese momento. Por ejemplo, si queremos hacer una función para
//saludar determinada familia

//Recuerdan el scope en el que fueron creadas
function saludarFamilia(apellido) {
    return function saludarMiembroDeFamilia(nombre){
        console.log(`Hola ${nombre} ${apellido}`)
    }
}
const saludarBalanzario = saludarFamilia("Balanzario")
const saludarMoran = saludarFamilia("Moran")


saludarBalanzario("Carlos")
saludarBalanzario("Aurora")
saludarBalanzario("Tomi")

saludarMoran("Carlos")
saludarMoran("Aurora")
saludarMoran("Fabi")

function prefijos(prefijo) {
    return function ponlePrefijo(palabra){
        console.log(`${prefijo}${palabra}`)
    }
}
const ponlePrefijoRe = prefijos("re")
const ponlePrefijoIn = prefijos("in")

ponlePrefijoRe("malo")
ponlePrefijoRe("bueno")
ponlePrefijoRe("sabroso")

ponlePrefijoIn("creible")
ponlePrefijoIn("flamable")
ponlePrefijoIn("cierto")
