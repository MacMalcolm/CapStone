export default function GetSquads(done, store, router, axios) {
  axios
    .get(`${process.env.API_URL}/Schedule`)
    .then(response => {
      store.Schedule.squad = response.data;
      console.log("Running get messages request");
      done();
    })
    .catch(error => {
      console.log(" It broke, submit a jira ticket", error);
      done();
    });
}
