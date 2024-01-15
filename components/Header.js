import html from "html-literal";
// <h1 class included hiddenClass, class="testThis hiddenClass">
export default state => html`
  <header id="change" class="headerTest">
    <h1 id="change2" class="testThis">${state.header}</h1>
  </header>
`;
