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
// let pilotNameInput = document.querySelector("input[name=pilotName]").value;
// let copilotNameInput = document.querySelector("input[name=copilotName]").value;
// let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
// let cargoMassInput = document.querySelector("input[name=cargoMass]").value;


function validateInput(testInput) {


  let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
    
        if(pilotNameInput.value === '' || copilotNameInput.value === '' 
        || fuelLevelInput.value === '' || cargoMassInput.value ===''){
            alert("All fields are required!");
            
        }else if(typeof pilotNameInput.value === number ){
            alert("Pls enter valid value");
        }
    
    })
}


 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 

}



/* 

1. Validate the user responses with `preventDefault()` to ensure the following: 

   a. The user has entered something for every field.

   b. The user has entered string values for names and number for fuel and cargo levels.


<script>
  window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      let usernameInput = document.querySelector("input[name=username]");
      let teamName = document.querySelector("input[name=team]");
      if (usernameInput.value === '' || teamName.value === '') {
        alert("All fields are required!");
      }

    });
  });
 </script>

--------------------------------------------------------------
first tried

  let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
    
        if(pilotNameInput.value === '' || copilotNameInput.value === '' 
        || fuelLevelInput.value === '' || cargoMassInput.value ===''){
            alert("All fields are required!");
            
        }else if(typeof pilotNameInput.value === number ){
            alert("Pls enter valid value");
        }
    
    })


--------------------
  let pilotNameInput = document.querySelector("input[name=pilotName]");
  let copilotNameInput = document.querySelector("input[name=copilotName]");
  let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
  let cargoMassInput = document.querySelector("input[name=cargoMass]");
  
  if(pilotNameInput === )
   


 */










function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
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
