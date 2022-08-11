// para poder vacunarme necesito cumplir con alguno de los isguientes requerimientos//
// Los siguientes requerimientos://

const edad = 35 
const frontera = false
const embarazo = false
const gestacion = 0

// -1 Mayores de 18 años que residen en un municipio fronterizo del país//

if(edad >= 18 && frontera == true){
    console.log("Te puedes vacunar por ser mayor de edad y ser fronterizo")  
}

// -2 Embarazada mayor de 18 años con mas de 9 semanas de gestación //
else if(embarazo == true && edad >= 18 && gestacion >= 9){
    console.log("Te puedes vacunar por ser mayor de edad y tener la gestación necesaria")
}

// -3 Personas que cumplen 30 años o mas en esta año //
else if(edad >= 30){
    console.log("Te puedes vacunar")
}

else{
    console.log("No cumples con los requisitos")
}
