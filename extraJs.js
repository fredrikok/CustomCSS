//----------------------------------------------hjelpebox------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var newDiv = document.createElement("div");
  newDiv.id = "GlupHjelpBox";
  newDiv.innerHTML = `
    <p class="hjelpeBoxP">Problemer med å logge inn?</p>
    <a href="https://www.smartskill.no/glup/kom-i-gang" target="_blank" rel="noreferrer">Klikk her for å gå til Glup sitt kunnskapssenter</a>
    <p class="hjelpeBoxP">Lurer du på hva Glup er?</p>
    <a href="https://www.smartskill.no/glup/kom-i-gang" target="_blank" rel="noreferrer">Klikk her for å lese mer om læringsplatformen Glup</a>
  `;

  var referenceNode = document.querySelector(".form-footer");

  if (referenceNode) {
    referenceNode.parentNode.insertBefore(newDiv, referenceNode.nextSibling);
  } else {
    console.log("The reference .form-footer div was not found.");
  }
});
//------------------------------------------------Bakgrunn------------------------------------------------------------------------------

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
