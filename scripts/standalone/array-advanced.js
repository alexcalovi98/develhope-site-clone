let fruits = ["Banana", "Apple", "Orange"]

console.log(fruits.find((fruit) => fruit == "Apple"))

console.log(findFruit("Apple"))

function findFruit(fruitToSearch) {
    for (let i = 0; i < fruits.length; i++) {
        let fruit = fruits[i]
        if (fruit == fruitToSearch) {
            return fruit
        }
    }
}