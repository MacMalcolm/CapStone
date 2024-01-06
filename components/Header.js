import html from "html-literal";

export default state => html`
  <header class="header">
    <h1>${state.header}</h1>
  </header>
`;
