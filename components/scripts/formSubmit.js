// import html from "html-literal";
// export default () => {

// const path = require("path");

// // Loading environemental variables, i.e. MongoDB path with values.
// require("dotenv").config({
//   path: path.resolve(__dirname, "../../server/.env")
// });

// // Ensure that process.env.MONGODB is set
// if (!process.env.MONGODB) {
//   console.error("MONGODB environment variable is not set.");
//   process.exit(1);
// }

// // MongoDB connection string
// const mongoUri = process.env.MONGODB;

//   document
//     .getElementById("contactForm") // Is 'function' a changeable name below? A: Yes, but it is an anonymous function and is not required.
//     .addEventListener("submit", function(event) {
//       event.preventDefault(); //Prevents the default form submission behavior
//       // Retrieve form data
//       const name = document.getElementById("name").value;
//       const email = document.getElementById("email").value;
//       const message = document.getElementById("message").value;

//       // Validating and sending data will go below. .trim() removes any 'whitespace' in the value, it is then checked to see if the value is empty by comparing it === to "".
//       if (name.trim() === "" || email.trim() === "") {
//         alert("Please ensure name and email are filled in and correct.");
//         return;
//       }

//       // Sending data below

//       const apiUrl = mongoUri;

//       // Create a data object with the form values.
//       const formData = {
//         name: name,
//         email: email,
//         message: message
//       };
//       // Use the fetsh API to send data to the server
//       fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       })
//         .then(data => {
//           // Handle the server response if needed
//           console.log("Server response:", data);
//           alert("Form submitted successfully!");
//         })
//         .catch(error => {
//           // Handle errors
//           console.error("Error submitting form:", error);
//           alert("Error submitting form. Please try again later.");
//         });
//     });
// };
