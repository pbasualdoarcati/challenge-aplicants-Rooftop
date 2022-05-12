let prueba1 = [-4,0,1,7,3,-2,0]

let prueba2 = [-16,7,9,-8,0,90]

let prueba3 = [8, 19, -50, 0, 10, 0, 109]

let prueba4 = [0, 16, -5, 14]

//Si asignamos el valor de nuestro array a cualquiera de las pruebas, la logica funciona. No se realizar test todavia.

let array = prueba4

//Ordenamos el array de positivos a negativos
 
array.sort(function(a, b){return b - a})

//Dibujando la matriz
let nuevaMatriz = []
let contador = 0
array.forEach((elemento, index) =>{
    let lineaTemp = []
    for (let i = 0; i<array.length; i++){
        if(index == i){
            lineaTemp.push(elemento)
        }
        else{
            lineaTemp.push('#')
        }
    }
    nuevaMatriz.push(lineaTemp)
})
console.log(nuevaMatriz)