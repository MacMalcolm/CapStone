import html from "html-literal";

export default () => {
  document.getElementById("contactForm") // Is 'function' a changeable name below? A: Yes, but it is an anonymous function and is not required.
  .addEventListener("submit", function (event) {
event.preventDefault(); //Prevents the default form submission behavior
// Retrieve form data
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

// Validating and sending data will go below. .trim() removes any 'whitespace' in the value, it is then checked to see if the value is empty by comparing it === to "".
if (name.trim() === "" || email.trim() === "") {
  alert("Please ensure name and email are filled in and correct.");
  return;
}

// Sending data below

  });
}
