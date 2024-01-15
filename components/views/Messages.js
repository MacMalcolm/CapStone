import html from "html-literal";

export default state => html`
  <h1>Messages: ${state.messages}</h1>
`;
