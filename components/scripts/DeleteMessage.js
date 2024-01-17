export default function DeleteMessage(state, store, router, axios) {
  if (state.view === "Messages") {
    // Add an event handler to submit button on contact form
    console.log("in the if statement");
    const buttons = document.querySelectorAll(".deleteButton");
    buttons.forEach(function(button) {
      button.addEventListener("click", event => {
        event.preventDefault();
        console.log("event target:", event.target);
        const buttonID = event.target.value;
        axios
          // Make a DELETE request to the API to destroy a message. Also try adding , buttonID instead of hard code route
          .delete(`${process.env.API_URL}/messages/${buttonID}`)
          .then(response => {
            console.log("Should be renavigating");
            router.navigate("/messages");
            router.navigate("/Messages");
          })
          .catch(error => {
            console.log("It broke, submit a Jira Ticket", error);
          });
      });
    });
  }
}
