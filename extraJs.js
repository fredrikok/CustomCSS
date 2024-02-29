// Create a new div element
var newDiv = document.createElement("div");

newDiv.id = "GlupHjelpBox";

newDiv.innerHTML = `
  <p class="hjelpeBoxP">Problemer med å logge inn?</p>
  <a href="https://www.smartskill.no/glup/kom-i-gang" target="_blank" rel="noreferrer">Klikk her for å gå til Glup sitt kunnskapssenter</a>
  <p class="hjelpeBoxP">Lurer du på hva Glup er?</p>
  <a href="https://www.smartskill.no/glup/kom-i-gang" target="_blank" rel="noreferrer">Klikk her for å lese mer om læringsplatformen Glup</a>
`;

var referenceNode = document.querySelector(
  "form-horizontal form-external-provider"
);

var parentNode = referenceNode.parentNode;

parentNode.insertBefore(newDiv, referenceNode);

document.addEventListener("DOMContentLoaded", function () {
  var backgroundDiv = document.createElement("div");

  backgroundDiv.id = "BackgroundDiv";

  var mainContainer = document.getElementById("main-container");

  if (mainContainer) {
    mainContainer.appendChild(backgroundDiv);
  } else {
    console.log("main-container not found.");
  }
});
