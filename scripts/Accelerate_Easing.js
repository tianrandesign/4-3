var animation = lottie.loadAnimation({
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "Accelerate_Easing.json"
	
});

document.getElementById('lottie').addEventListener('mouseover', function(){ animation.play(); })
document.getElementById('lottie').addEventListener('mouseleave', function(){ animation.stop(); });