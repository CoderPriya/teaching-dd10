var vid = document.getElementById("bgvid");
var pauseButton = document.getElementById("vidpause");
var muteButton = document.getElementById("vidmute");
	


function vidFade() {
	vid.classList.add("stopfade");
	}
	
	vid.addEventListener('ended', function() {
	
	// only functional if "loop" is removed
	vid.pause();
	
	// to capture IE10
	vidFade();
	});
	
pauseButton.addEventListener("click", function() {
	vid.classList.toggle("stopfade");
	if (vid.paused) {
		vid.play();
		pauseButton.innerHTML = '<i class="fa fa-pause"></i>';
	} else {
		vid.pause();
		pauseButton.innerHTML = '<i class="fa fa-play"></i>';
	}
});

// Event listener for the mute button
muteButton.addEventListener("click", function() {
  if (vid.muted == false) {
    // Mute the video
    vid.muted = true;

    // Update the button text
    muteButton.innerHTML = '<i class="fa fa-volume-off"></i>';
  } else {
    // Unmute the video
    vid.muted = false;

    // Update the button text
    muteButton.innerHTML = '<i class="fa fa-volume-up"></i>';
  }
});