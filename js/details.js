
var carMake;
var carYear;
var carImage;

function getChosenCar() 
{
	var chosenCar;
	if(sessionStorage.getItem("chosenCar")){
		chosenCar=JSON.parse(sessionStorage.getItem("chosenCar"));
	}
	return chosenCar;
}

function populateDetails()
{
	var chosenCar=getChosenCar();
	carMake.innerHTML=chosenCar.make;
	carYear.innerHTML=chosenCar.year;
    carImage.innerHTML=chosenCar.image;
}

function init()
{
	carMake=document.getElementById("make");
	carYear=document.getElementById("year");
    carImage=document.getElementById("image");
	populateDetails()
}


window.addEventListener("load",init, false);
