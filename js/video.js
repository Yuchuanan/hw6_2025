window.addEventListener("load", function(){
	const vid = document.getElementById("player1");
	console.log("Good job opening the window");
	vid.autoplay = false;
	vid.loop = false;
	console.log("Autoplay is set to false");
	console.log("Looping is set to false");
  
	const btnPlay = document.getElementById("play");
	const volDisplay = document.getElementById("volume");
	btnPlay.addEventListener("click", function(){
	  vid.play();
	  const volVal = vid.volume;
	  volDisplay.innerHTML = `${volVal * 100}%`;
	  console.log("Play Video");
	});
  
	const btnPause = document.getElementById("pause");
	btnPause.addEventListener("click", function(){
	  vid.pause();
	  console.log("Pause Video");
	});
  
	const btnSlower = document.getElementById("slower");
	btnSlower.addEventListener("click", function(){
	  vid.playbackRate *= 0.90;
	  console.log("Slow down video");
	  console.log("Speed is " + vid.playbackRate);
	});
  
	const btnFaster = document.getElementById("faster");
	btnFaster.addEventListener("click", function(){
	  vid.playbackRate /= 0.90;
	  console.log("Speed up video");
	  console.log("Speed is " + vid.playbackRate);
	});
  
	const btnSkip = document.getElementById("skip");
	btnSkip.addEventListener("click", function(){
	  if(vid.currentTime + 10 > vid.duration){
		vid.currentTime = 0;
	  } else {
		vid.currentTime += 10;
	  }
	  console.log("Skip ahead");
	  console.log("Video current time is " + vid.currentTime);
	});
  
	const btnMute = document.getElementById("mute");
	btnMute.addEventListener("click", function(){
	  if(!vid.muted){
		vid.muted = true;
		btnMute.textContent = "Unmute";
		console.log("Mute");
	  } else {
		vid.muted = false;
		btnMute.textContent = "Mute";
		console.log("Unmute");
	  }
	});
  
	const slider = document.getElementById("slider");
	slider.addEventListener("change", function(){
	  vid.volume = slider.value / 100;
	  volDisplay.innerHTML = `${slider.value}%`;
	  console.log("The current value is " + vid.volume);
	  console.log(volDisplay);
	});
  
	const btnVintage = document.getElementById("vintage");
	const btnOrig = document.getElementById("orig");
	btnVintage.addEventListener("click", function(){
	  vid.setAttribute("class", "video oldSchool");
	});
	btnOrig.addEventListener("click", function(){
	  vid.setAttribute("class", "video");
	});
  });
  