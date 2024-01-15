export default function FormSub(state, store, router, axios) {
  console.log("At start of TesT");
  if (state && state.view === "Contact") {
    // Add an event handler to submit button on contact form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      console.log("Just added event listener");
      //Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        name: inputList.name.value,
        email: inputList.email.value,
        message: inputList.message.value
      };
      // Log the request body to the console
      console.log("Passed through setting request data");

      axios
        // Make a POST request to the API to create a new message
        .post(`${process.env.API_URL}/message`, requestData)
        .then(response => {
          // Then push the new message onto the Message state message attribute so it can be displayed.
          store.Messages.messages.push(response.Data);
          // Delete the following navigation after test succesful
          router.navigate("/Messages");
        })
        .catch(error => {
          console.log("It broke, submit a Jira Ticket", error);
        });
    });
  }
}
