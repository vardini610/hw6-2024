// let video;

var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay and loop are turned off!")
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("Play Video")
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("Volume is updated")
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Video is paused")
});
