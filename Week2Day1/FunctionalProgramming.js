//!=== Callback Functions

// const Callback = ()=> console.log("start") 

// setTimeout( Callback, 3000 );
    
// console.log("end");

//?=====Big Freeze

// const array = Object.freeze([1, 2, 3, 4, 5])
// array.push(400)
// console.log(array)


//?===========Spread, Concat, and Slice
const groceryList = Object.freeze([
  { "item": "carrots",           "haveIngredient": false },
  { "item": "onions",            "haveIngredient": true  },
  { "item": "celery",            "haveIngredient": false },
  { "item": "cremini mushrooms", "haveIngredient": false },
  { "item": "butter",            "haveIngredient": true  }
]);


const newItem = [...groceryList, { "item": "Milk", "haveIngredient": true }]
// console.log(newItem)

//--Concat


var arr2 = [4, 5, 6]



// var arr12 = arr1.concat(arr2)
// console.log(arr12)



// const animals = ['ant', 'bison', 'lion', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(-300))

//!--------------------- Map & Filter

const animals = ["leopard🐆", "giraffe 🦒", "zebra🦓", "elephant 🐘", "monkey 🙉", "lion 🦁"]

// for (let index = 0; index < animals.length; index++) {
    
//     console.log(animals[index] += " MERN Zoo")
    
// }


const mapAnimals = animals.map((element) => {
    return element += " MERN Zoo"
})

// console.log(mapAnimals)
// console.log(animals)

var arr1 = [1, 2, 3]

const doubleArr1 = arr1.map((num) => {
    return num * 2
})


console.log(doubleArr1)







