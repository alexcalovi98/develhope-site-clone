main(hello) //hello is not executed here

console.log("---------------------------")

main(secondHello) //secondHello is not executed here

// WARNING setTimeout(main(thirdHello), 3000)
// 1. main(thirdHello) -> OUTPUT console.log and returns undefined
// 2. setTimeout(undefined, 3000)
// 3. ERROR from setTimeout because the callback is undefined

setTimeout(main, 3000, thirdHello) // -> setTimeout invoke main(thirdHello) after 3 seconds

function main(ourFunction) {
    console.log("MAIN - Typeof fnc:", typeof ourFunction);
    ourFunction() //hello, secondHello or whatever it's executed here
}

function hello() {
    console.log("Hello World - From callback")
}

function secondHello() {
    console.log("Second Hello World - From callback")
}

function thirdHello() {
    console.log("Third Hello World - From callback")
}