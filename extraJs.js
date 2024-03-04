//----------------------------------------------hjelpebox------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var newDiv = document.createElement("div");
  newDiv.id = "GlupHjelpBox";
  newDiv.innerHTML = `
    <div class=hjelpeBoxDiv>
        <p class="hjelpeBoxP">Problemer med å logge inn?</p>
        <a href="https://www.smartskill.no/glup/kom-i-gang#sporsmal_og_svar" target="_blank" rel="noreferrer">Klikk her for hjelp</a>
    </div>
      <div class=hjelpeBoxDiv>
        <p class="hjelpeBoxP">Lurer du på hva Glup er?</p>
        <a href="https://www.smartskill.no/glup" target="_blank" rel="noreferrer">Klikk her for å lese mer om læringsplatformen Glup</a>
    </div>
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
