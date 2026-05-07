// Generate a number between 4 and 10
const MIN_VOTE = 4;
const MAX_VOTE = 10;

// while, do-while, for
let generatedVote

// While
generatedVote = randomVote()
console.log("[OUTSIDE WHILE] The student vote is:", generatedVote)
while (generatedVote < 6) {
    console.log("The student vote is INSUFFICIENT")
    generatedVote = randomVote()
    console.log("[WHILE] The student vote is:", generatedVote)
}
console.log("The student vote is SUFFICIENT");

// Refactor with do-while
do {
    generatedVote = randomVote()
    console.log("[DO WHILE] The student vote is:", generatedVote)
    if (generatedVote < 6) {
        console.log("The student vote is INSUFFICIENT")
    }
} while (generatedVote < 6)
 console.log("The student vote is SUFFICIENT")

console.log("---------------------------")

// While vs for
let viewedVideos = 0;
let totalVideos = 3;
while (viewedVideos < totalVideos) {
    viewedVideos = viewedVideos + 1
    console.log("[WHILE] Viewing video number", viewedVideos)
}

if (viewedVideos == totalVideos) {
    console.log("Unit completed, viewed all videos\n")
}

for (let startingVideo = 1; startingVideo <= totalVideos; startingVideo++) {
    console.log("[FOR] Viewing video number", startingVideo)
    // viewVideos++ -> 2 at the first step, 3 at the second step, 4 at the third (4 <= 3 = false, so stop the cycle)
}

if (viewedVideos == totalVideos) {
    console.log("Unit completed, viewed all videos\n")
}

function randomVote(min = MIN_VOTE, max = MAX_VOTE) {
    console.log("Calling randomVote with min=" + min + " and max=" + max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}