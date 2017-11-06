const nombre = 'Carlos'
const dias = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
]
const nDias = dias.length
function correr() {
    //return de un valor de entre 5 y 15
    const min = 5
    const max = 15
    return Math.round(Math.random() * (max - min)) + min
}

let totalKms = 0

for (let i = 0; i < nDias; i++) {
    const kms = correr()
    totalKms += kms
    console.log(`El día ${dias[i]} ${nombre} corrió ${kms}Kms`)
}
let promedio = totalKms / nDias
console.log(`${nombre} Corrió un total de ${totalKms}Kms dando un promedio de ${promedio.toFixed(2)}Kms por día`)
