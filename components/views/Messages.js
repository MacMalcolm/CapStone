import html from "html-literal";

export default state => html`
  <messageList>
    Messages:
    ${state.messages
      .map(message => {
        return `<div id="messageID${message._id}">
      ${message}
        <tr>Name:${message.name}</tr><tr>Email:${message.email}</tr><tr>Message:${message.message}</tr>
        <input type="submit" name="delete" value="delete message" />
        </div>`;
      })
      .join("")}
  </messageList>
`;
