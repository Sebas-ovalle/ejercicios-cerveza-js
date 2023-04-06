// 1- Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)

function sinExceder (valCerveza, graAlcohol){
    const cervezas = valCerveza.filter(cerveza => cerveza.abv <= graAlcohol)
    const cervezasNuevo = cervezas.map(cerveza => {
        let aux = {
            nombre:cerveza.name,
            graAlcohol:cerveza.abv,
            amargor: cerveza.ibu
        }
        return aux
    })
    return cervezasNuevo
}
console.log(sinExceder(beers, 6))









// 2- Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas más alcohólicas

// const masAlcohol = beers.map(beers => beers.abv).sort((a,b) => b -a)

// const diezMas = masAlcohol.slice(0,10)
// console.log(masAlcohol)




// 3- Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas

// const masAmargas = beers.map(beers =>  beers.ibu).sort((a,b) => a -b)

// const diezMas = masAmargas.slice(0,10)
// console.log(diezMas)

// 4- Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false

// function ordFunc (birras, propiedades, escalonar){
//     if(escalonar){
//         let ordenadas = birras.sort((a,b) => a[propiedades] - b[propiedades])
//         let finOrden = ordenadas.slice(0,10)

//         return finOrden
//     } else {
//         let ordenadas = birras.sort((a,b) => b[propiedades] - a[propiedades])
//         let finOrden = ordenadas.slice(0,10)

//         return finOrden
//     }
// }
// console.log(ordFunc(beers,"abv",true));


// 5- Generar una función que reciba como parámetro un array de cervezas y un id. La función debe renderizar (renderear, dibujar, pintar, llenar, etc) en un archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. Cada fila debe tener los datos que se piden de cada una de las cervezas.

// function nuevoTablero (cervezas, id){
// const elementos = document.getElementById(id)
// const template = cervezas.reduce((acc, act) =>{
// return acc +  `
//               <tr>
//                 <td>Mark</td>
//                 <td>Otto</td>
//                 <td>@mdo</td>
//               </tr>
//     `
// },` `)
// elementos.innerHTML = template

// }
// nuevoTabl

/////////////////////