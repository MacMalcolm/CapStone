import html from "html-literal";

export default state => html`
  <table id="squads">
    <tr>
      <th>Squad</th>
      <th>Time</th>
      <th>Days</th>
      <th>Availability</th>
      <th></th>
    </tr>
    ${state.squad
      .map(squad => {
        return `<tr><td>${squad.squad}</td><td>${squad.time}</td><td>${squad.days}</td><td>${squad.availability}</td></tr>`;
      })
      .join("")}
  </table>
`;
