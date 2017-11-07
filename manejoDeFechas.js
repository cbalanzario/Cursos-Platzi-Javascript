const dias =
[
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"

]
// Mi fecha de nacimiento 1984 04 09
// const nacimiento = newDate(AAAA, MM-1, DD);
// const nacimiento = newDate(1984, 03, 09);
const nacimiento = new Date(1984, 3, 9);
const hoy = new Date();
const tiempomil = hoy - nacimiento
const tiemposeg = tiempomil /1000
const tiempomin = tiemposeg / 60
const tiempohor = tiempomin / 60
const tiempodias = tiempohor / 24
const tiempoyear = tiempodias / 365
const proximo = new Date(hoy.getFullYear()+1, nacimiento.getMonth(), nacimiento.getDate())
console.log(`Tu próximo cumpleaños será en un ${dias[proximo.getDay()]}`)
