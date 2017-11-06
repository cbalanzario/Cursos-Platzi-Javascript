let vidaGoku = 100
let vidaSuperman = 100

const min_power = 5
const max_power = 12

let round = 0
//Funcion normal, la cambiamos a rowFunction
// function ambosSiguenVivos() {
//     return vidaGoku > 0 && vidaSuperman >0
// }
const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman >0
const calcularGolpe = () => Math.round(Math.random() * (max_power - min_power) + min_power)
const gokuSigueVivo = () => vidaGoku > 0

while(ambosSiguenVivos()) {
    round++
    console.log(`Round ${round}`)

    const golpeGoku = calcularGolpe()
    const golpeSuperMan = calcularGolpe()

    if(golpeGoku > golpeSuperMan) {
        //ataca goku
        console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`)
        vidaSuperman -= golpeGoku
        console.log(`Superman queda en ${vidaSuperman} de vida`)
    } else {
        //ataca superman
        console.log(`Superman ataca a Goku con un golpe de ${golpeSuperMan}`)
        vidaGoku -= golpeSuperMan
        console.log(`Goku queda en ${vidaGoku} de vida`)
    }
}
if(gokuSigueVivo()) {
    console.log(`Ganó Goku y le quedó ${vidaGoku} de su vida`)
} else {
    console.log(`Ganó Superman ${vidaSuperman} de su vida`)
}
