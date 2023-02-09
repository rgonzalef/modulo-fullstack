/***Write a JavaScript function to check whether an `input` is an array or not
**Write a JavaScript function to clone an array
**Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
**Write a simple JavaScript program to join all elements of the following array into a string myColor = ["Red", "Green", "White", "Black"];
**Write a JavaScript program to find the most frequent item of an array ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Kiwi", "Kiwi", "Apple"];
**There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays: [2,34,67,89] [56,200,125,9]
**Write a JavaScript function to sort the following array of objects by title value.
var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];*/

var testArray = ["Banana", "Orange", "Apple", "Pera"]
//1

// function isArray(input){
//     return console.log(Array.isArray(input))
// }
// isArray(testArray)



// //2
// function clonArray(inputArray){
//     var arrayClon = [... inputArray]
//     return console.log(arrayClon)
// }
// clonArray(testArray)


//3
// function returnElements(inputArray,n){
//     for(let i= 0; i < n ; i++ ){
//         console.log(inputArray[i])
//     }
// }
// returnElements(testArray,3)

//4
// var myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join('-'));

//5
const testArray2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Kiwi", "Kiwi", "Apple"];

const arrayProcesado = {}
testArray2.map((j) =>{
   arrayProcesado[j] = arrayProcesado[j] + 1 || 1
})

console.log(arrayProcesado)