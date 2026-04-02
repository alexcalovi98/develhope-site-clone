let isStudentPromoted = false

if (isStudentPromoted) {
    console.log("The student is promoted")
} else {
    console.log("The student has failed")
}

console.log("OPERATOR: The student " + (isStudentPromoted ? "is promoted" : "has failed"));

console.log("---------------------------")

let studentStatus = "onboarding" //onboarding, attending, promoted, failed

if (studentStatus === "onboarding") {
    console.log("The student is onboarding")
} else if (studentStatus === "attending") {
    console.log("The student is attending the course")
} else if (studentStatus === "promoted") {
    console.log("The student is promoted")
} else if (studentStatus === "failed") {
    console.log("The student has failed")
} else {
    console.log("Unknown status:", studentStatus)
}

switch (studentStatus) {
    case "onboarding":
        console.log("SWITCH: The student is onboarding")
        break;
    case "attending":
        console.log("SWITCH: The student is attending the course")
        break;
    case "promoted":
        console.log("SWITCH: The student is promoted")
        break;
    case "failed":
        console.log("SWITCH: The student has failed")
        break;
    default:
        console.log("SWITCH: Unknown status:", studentStatus)
}