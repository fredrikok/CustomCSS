// Create a new div element
var newDiv = document.createElement("div");

newDiv.id = "GlupHjelpBox";

newDiv.innerHTML = `
  <p>Problemer med å logge inn?</p>
  <a href="https://www.smartskill.no/glup/kom-i-gang" target="_blank" rel="noreferrer">Klikk her for å gå til Glup sitt kunnskapssenter</a>
  <p>Lurer du på hva Glup er?</p>
  <a href="https://www.smartskill.no/glup/kom-i-gang" target="_blank" rel="noreferrer">Klikk her for å lese mer om læringsplatformen Glup</a>
`;

var referenceNode = document.querySelector(".form-footer.external-providers");

var parentNode = referenceNode.parentNode;

parentNode.insertBefore(newDiv, referenceNode);

// <div class="form-group form-group-login-button">
// <div class="col-sm-offset-1 col-sm-10 no-side-padding">
//     <input type="submit" class="btn btn-primary btn-block form-login-button-password" id="LoginButton" value="Sign in" formnovalidate="">
// </div>
// </div>

document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Locate the reference element after which the new block will be inserted
  var referenceElement = document.querySelector(
    ".form-group.form-group-login.form-group-login-button"
  );

  // Step 2: Create the new block to insert
  var newBlock = document.createElement("div");
  newBlock.innerHTML = `
        <div class="col-sm-offset-1 col-sm-10 no-side-padding">
            <p>Additional content goes here</p>
            <!-- Add more content as needed -->
        </div>
    `;

  // Step 3: Insert the new block into the document
  // Check if the reference element exists and has a next sibling to insert before
  if (referenceElement && referenceElement.nextElementSibling) {
    referenceElement.parentNode.insertBefore(
      newBlock,
      referenceElement.nextElementSibling
    );
  } else if (referenceElement) {
    // If there's no next sibling, append the new block at the end of the parent
    referenceElement.parentNode.appendChild(newBlock);
  }
});
