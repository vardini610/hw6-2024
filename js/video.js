// let video;

var video;

// Page load functionality
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay and loop are turned off!")
});

// Play button functionality
document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("Play Video")
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("Volume is updated")
});

// Pause button functionality
document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Video is paused")
});

// Slow Down functionality
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9; // Reduce speed by 10%
	console.log("New speed: " + video.playbackRate.toFixed(5));
  });
  
  // Speed Up functionality
  document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9; // Undoing 10% slow down
	console.log("New speed: " + video.playbackRate.toFixed(5));
  });
  
  // Skip Ahead functionality
  document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 >= video.duration) {
	  video.currentTime = 0;
	} else {
	  video.currentTime += 10;
	}
	console.log("Current time: " + video.currentTime);
  });
  
  // Mute functionality
  document.querySelector("#mute").addEventListener("click", function () {
	video.muted = !video.muted;
	this.innerHTML = video.muted ? "Unmute" : "Mute";
	console.log("Muted: " + video.muted);
  });
  
  // Volume Slider functionality
  document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume set to: " + video.volume);
  });
  
  // Apply oldSchool class (Styled button)
  document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log("OldSchool style applied");
  });
  
  // Remove oldSchool class (Original button)
  document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
	console.log("OldSchool style removed");
  });