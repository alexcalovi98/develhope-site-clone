// Record

type Key = "keyOne" | "keyTwo" | "keyThree"
type Value = "value1" | "value2" | "value3"

let map: Record<Key, Value> = {
    keyOne: "value1",
    keyTwo: "value2",
    keyThree: "value3",
}

/** ---------------------------------- */

// keyof
type Student = {
    name: string,
    surname: string,
    course: string
}

type StudentKey = keyof Student // is equals in this case to: type StudentKey = "name" | "surname" | "course"