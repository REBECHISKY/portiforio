function exitPage() {
	var rocket = document.createElement("div");
	rocket.className = "rocket";
	var image = document.createElement("img");
	image.src = "https://cdn-icons-png.flaticon.com/512/619/619054.png";
	rocket.appendChild(image);
	document.body.appendChild(rocket);
	setTimeout(function() {
		window.location.href = "index.html";
	}, 1000);
}