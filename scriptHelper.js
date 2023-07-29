// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */


}

// Validating to see if the data passed in is the correct one
function validateInput(testInput) {
    if (testInput === 0 || testInput === "") {
        return "Empty";
     } else if (isNaN(testInput)) {
         return "Not a Number";
     } else {
         return "is a Number";
     }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   // setting variables for the launch status check and grabbing by ID

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
