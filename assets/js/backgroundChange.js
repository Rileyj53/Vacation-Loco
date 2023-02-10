function backgroundChange() {
    const rndInt = Math.floor(Math.random() * 2) + 1
    const imgUrl = "url(assets/img/" + rndInt + ".jpg)"

    document.getElementById("background-image").style.backgroundImage = imgUrl;
}