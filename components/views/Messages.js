import html from "html-literal";

export default state => html`
  <messageList>
    Messages:
    ${state.messages
      .map(message => {
        return `<div id="messageID${message._id}">
      ${message}
        <tr>Name:${message.name}</tr><tr>Email:${message.email}</tr><tr>Message:${message.message}</tr>
        <button id="deleteID${message._id}" class="deleteButton" name="delete" value="${message._id}" />
        </div>`;
      })
      .join("")}
  </messageList>
  <form id="admin" method="PUT" action="">
    <h2>Update a squad</h2>
    <div>
      <label for="squad">Squad:</label>
      <!--Dynamically populate list with already created squads-->
      <select id="squad" name="squad">
        <option value="rampage">Rampage</option>
        <option value="rave">Rave</option>
        <option value="rebel">Rebel</option>
        <option value="rodeo">Rodeo</option>
        <option value="reveille">Reveille</option>
        <option value="rogue">Rogue</option>
        <option value="riot">Riot</option>
        <option value="rowdy">Rowdy</option>
      </select>
    </div>
    <div>
      <label for="time">Select a start time:</label>
      <!--Label for= is associated with 'name' fields. All related fields must share same name-->
      <select id="hour" name="time">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select id="minute" name="time">
        <option value="0">00</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="45">45</option>
      </select>
      <select id="ampm" name="time">
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </select>
    </div>
    <div>
      <label for="day">Select Days:</label>
      <select id="day" name="day">
        <option value="mw">Monday/Wednesday</option>
        <option value="tth">Tuesday/Thursday</option>
      </select>
    </div>
    <div>
      <label for="availability">Availability:</label>
      <input type="radio" name="availability" value="available" checked />
      <label for="available">Available</label>
      <input type="radio" name="availability" value="full" />
      <label for="full">Full</label>
    </div>
    <input type="submit" name="submit" value="update squad" />
  </form>
`;
