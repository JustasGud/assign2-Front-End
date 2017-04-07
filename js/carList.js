var carList;

function getAllCars() 
{
	var cars=[]
	cars.push({id:0,make:"BMW",year:"2007"});
	cars.push({id:1,make:"Audi",year:"1975"});
	cars.push({id:2,make:"Mercedez-Benz",year:"2010"});
	cars.push({id:3,make:"Volvo",year:"1985"});
    cars.push({id:4,make:"Citroen",year:"2017"});
    cars.push({id:5,make:"Seat",year:"2016"});
    cars.push({id:6,make:"Volkswagen",year:"2015"});
    cars.push({id:7,make:"Vauxhal",year:"2012"});
    cars.push({id:8,make:"Honda",year:"2014"});
    cars.push({id:9,make:"Toyota",year:"2015"});
    cars.push({id:10,make:"Peugeot",year:"2013"});
	return cars;
}

function viewDetails(car){
	return function(){

		sessionStorage.setItem("chosenCar", JSON.stringify(car));

		window.location.assign("details.html");
	}
	
}

function buildImage(url) {
  var img = new Image();
  img.onerror = function() {
    console.log("could not load image on URL " + url);
  };
  img.src = url;
  return img;
}

function populateList() 
{
	var allCars=getAllCars();
	carList.innerHTML="";
	allCars.forEach(function(car){
		var newDiv=document.createElement("div");
		newDiv.innerHTML=car.make;
		newDiv.addEventListener("click",viewDetails(car),false)
		carList.appendChild(newDiv);
	})
}

function init()
{
	carList=document.getElementById("carList");
	populateList()
}


window.addEventListener("load",init, false);
