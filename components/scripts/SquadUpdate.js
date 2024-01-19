export default function FormSub(state, store, router, axios) {
  if (state.view === "Messages") {
    // Add an event handler to submit button on contact form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      console.log("Just added event listener for squad update");
      //Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);
      var squadID = "";
      const requestData = {
        squad: inputList.squad.value,
        time: inputList.time.value,
        day: inputList.day.value,
        availability: inputList.availability.value
      };
      // Check to see if the squad already exists, the post or put accordingly
      axios.get(`${process.env.API_URL}/Schedule`).then(response => {
        for (const data of response.data) {
            squadID = data.squad._id;
            axios
              // Make a Post request to the API to create a new squad
              .delete(`${process.env.API_URL}/Schedule/${squadID}`)
              .then(response => {
                console.log("delete request initiated");
                // Delete the following navigation after test successful
                router.navigate("/Schedule");
              })
              .catch(error => {
                console.log("It broke, submit a Jira Ticket", error);
              });
            }
          }
      );
    }


