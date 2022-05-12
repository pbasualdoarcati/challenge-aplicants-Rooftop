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

array.forEach((elemento, index) =>{
    let lineaTemp = []                              //Creamos una variable temporal que nos servira para ir guardando las filas
    for (let i = 0; i<array.length; i++){           //En nuestro for interno para dibujar con #, primero realizamos un condicional, si el indice que estoy iterando en //
                                                    //el forEach coincide con "i" del for solo agrego nuestro valor, significa que estoy dibujando la diagonal, sino completo con "#"
        if(index == i){
            lineaTemp.push(elemento)
        }
        else{
            lineaTemp.push('#')
        }
    }
    nuevaMatriz.push(lineaTemp)                     //Agrego nuestra "linea de tiempo" a la nueva matriz que es el resultado a visualizar.
})
console.log(nuevaMatriz)