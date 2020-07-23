const video = document.querySelector("video");

document.querySelector("video");

video.playbackRate = 0.5;
video.playbackRate = 2;
video.playbackRate = 1;

DocumentTimeline.addEventListener("keydown", e => {
    checkLetter(e.key)
})

function checkLetter(key) {
    switch(key) {
        case "a":
            video.playbackRate += 0.1;
            console.log(`current Rate: ${video.playbackRate.toFixed(2)}`)
            break;        
        case "s":
            video.playbackRate -= 0.1;
            console.log(`current Rate: ${video.playbackRate.toFixed(2)}`)
            break;        
        case "d":
            video.playbackRate = 0.1;
            console.log(`current Rate: ${video.playbackRate.toFixed(2)}`)
            break;
    }
}