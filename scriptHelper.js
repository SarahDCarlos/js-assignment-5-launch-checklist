// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget")
   missionTarget.innerHTML =
    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
    `
}

// Validating to see if the data passed in is the correct one
function validateInput(testInput) {
    if(testInput === "" ) {
     return "Empty";
    } else if (isNaN(testInput)) {
     return "Not a Number";
    } else {
     return "Is a Number";
    }
   //      console.log(typeof testInput)
// console.log(typeof Number("testInput")) 
 }



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   // setting variables for the launch status check and grabbing by ID
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
// let list = document.getElementById('faultyItems');
    // fuelLevel = Number(fuelLevel);
    // cargoMass = Number(cargoMass);
    // console.log(pilot);

    //using if statements to make sure players are inputing data correctly if not alerting. 
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
       }
       else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Make sure to enter valid information for each field!");
       }
       else if (fuelLevel < 10000) {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = "There is not enough fuel for the journey";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'rgb(199, 37, 78)';
       }
       else if (cargoLevel > 10000) {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = '#C7254E';
       }
       else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = '#419F6A';
       }
    
    }
//Fetching data from the API 
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

// Choosing a random planet to display

function pickPlanet(planets) {
   let pickedPlanet = Math.floor(Math.random() * planets.length);
   return planets[pickedPlanet];
}





module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
