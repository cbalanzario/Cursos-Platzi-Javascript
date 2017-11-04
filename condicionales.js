const starWars7 = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13

const nameCarlos = 'Carlos'
const ageCarlos = 33

const nameDiego = 'Diego'
const ageDiego = 6

function canWatchStarWars7(name, age, conAdulto = false){
	if(age >= pgStarWars7) {
        console.log(`${name} puede pasar a ver ${starWars7}`)
    } else if (conAdulto) {
        console.log(`${name} puede pasar a ver ${starWars7}. Aunque su edad es ${age},
            se encuentra acompañad@ por un adulto`)
    } else {
        console.log(`${name} no puede pasar a ver ${starWars7}.
            Tiene ${age} años y necesita ${pgStarWars7}`)
    }
}

canWatchStarWars7(nameCarlos, ageCarlos)
canWatchStarWars7(nameDiego, ageDiego, true)
