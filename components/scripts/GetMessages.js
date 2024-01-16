export default function GetMessages(done, store, router, axios) {
  axios
    .get(`${process.env.API_URL}/messages`)
    .then(response => {
      store.Messages.messages = response.data;
      console.log("Running get messages request");
      done();
    })
    .catch(error => {
      console.log(" It broke, submit a jira ticket", error);
      done();
    });
}
