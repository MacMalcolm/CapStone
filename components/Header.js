import html from "html-literal";

export default state => html`
  <header id="change" class="headerTest">
    <h1>${state.header}</h1>
  </header>
`;
