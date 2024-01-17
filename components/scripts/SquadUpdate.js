export default function FormSub(state, store, router, axios) {
  if (state.view === "Messages") {
    // Add an event handler to submit button on contact form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      console.log("Just added event listener for squad update");
      //Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        id: inputList.squad.value,
        squad: inputList.squad.value,
        time: inputList.time.value,
        day: inputList.day.value,
        availability: inputList.availability.value
      };
      // Log the request body to the console
      console.log("Passed through setting request data");

      axios
        // Make a POST request to the API to create a new message
        .put(`${process.env.API_URL}/Schedule`, requestData)
        .then(response => {
          console.log("About to store data");
          // Then push the new message onto the Message state message attribute so it can be displayed.
          store.Schedule.squad.push(response.data);
          // Delete the following navigation after test successful
          console.log("Inside axios post request");
          router.navigate("/Schedule");
        })
        .catch(error => {
          console.log("It broke, submit a Jira Ticket", error);
        });
    });
  }
}
