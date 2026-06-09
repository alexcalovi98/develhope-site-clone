let array = ['hello', 'world', 'hi', 'goodmorning']

array[0] = "helloooo" //assigning a value on position 0 of the array

console.log("Array:", array, "Length:", array.length)
console.log("First element:", array[0])
console.log("Second element:", array[1])
console.log("Third element:", array[2])
console.log("Fourth element:", array[3])

console.log("---------------------------")

for (let i = 0; i < array.length; i++) {
    console.log("i=" + i + ", calling array[" + i + "]")
    console.log("Element in position " + i + "=" + array[i])
}

console.log("---------------------------")

array.forEach((value, index) => console.log("[FOR EACH] Value:", value, "Index:", index))

console.log("---------------------------")

let newLength = array.push('goodnight')
console.log("Array after adding new element to the end:", array, "New length:", newLength)

let deletedElement = array.pop()
console.log("Deleted element:", deletedElement)
console.log("Array after removing last element:", array, "New length:", array.length)

console.log("---------------------------")

newLength = array.unshift("ehi bro")
console.log("Array after adding new element to the start:", array, "New length:", newLength)

deletedElement = array.shift()
console.log("Deleted element:", deletedElement)
console.log("Array after removing first element:", array, "New length:", array.length)

console.log("---------------------------")

array.splice(2, 0, "good afternoon")
console.log("Array:", array)

let partialArray = array.slice(1, 3)
console.log("Partial array:", partialArray)