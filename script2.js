function exitPage() {
	var rocket = document.createElement("div");
	rocket.className = "rocket";
	var image = document.createElement("img");
	image.src = "https://static.wixstatic.com/media/290fed_ebded07c4dd64dba8ba96f30bc06a0a0~mv2.png/v1/fill/w_360,h_354,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/astronautadigital-capa.png";
	rocket.appendChild(image);
	document.body.appendChild(rocket);
	setTimeout(function() {
		window.location.href = "index.html";
	}, 1000);
}