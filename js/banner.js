var images = ["images/bmw.jpg", "images/audi.jpg", "images/mb.jpg", "images/volvo.jpg"];

var imageNumber = 0;
var imageLengh = images.length - 1;

function changeImage(x) {
    imageNumber += x;
    
    if (imageNumber > imageLengh){
        imageNumber = 0;
    }
    if (imageNumber < 0){
        imageNumber = imageLengh;
    }
    
    document.getElementById("banner").src = images[imageNumber];
    
    return false;
}

function autoRun(){
    setInterval("changeImage(1)", 5000);
}
window.onload = autoRun();