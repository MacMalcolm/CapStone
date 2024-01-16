export default function DeleteMessage(state, store, router, axios) {
  console.log("Entered the delete request");
  console.log(`State.view: ${state.view}`);
  if (state.view === "Messages") {
    // Add an event handler to submit button on contact form
    console.log("in the if statement");
    const messageID = document.querySelector("MessageList");
    console.log("Attempting to locate by ID:");
    console.log(messageID);
    messageID.addEventListener("submit", event => {
      event.preventDefault();
    });
    axios
      // Make a DELETE request to the API to destroy a message
      .delete(`${process.env.API_URL}/messages`)
      .then(response => {
        router.navigate("/Messages");
      })
      .catch(error => {
        console.log("It broke, submit a Jira Ticket", error);
      });
  }
}
