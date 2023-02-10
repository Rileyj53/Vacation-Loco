function backgroundChange() {
    const rndInt = (Math.floor(Math.random() * 2) + 1)
    const imgUrl = `url(assets/img/${rndInt}.jpg)`
    let imgLocation = ""

    if (rndInt === 1) {
        imgLocation = "Costa Rica"
    }
    else if (rndInt === 2) {
        imgLocation = "Panama"
    }

    document.getElementsByClassName("background-image")[0].style.backgroundImage = imgUrl;

    document.getElementsByClassName("img-location")[0].innerHTML = imgLocation;


}

backgroundChange()