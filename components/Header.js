import html from "html-literal";
import logo from "../assets/img/GIJaneLogo.jpg";
// <h1 class included hiddenClass, class="testThis hiddenClass">
export default state => html`
  <header id="change" class="headerTest">
    <img src=${logo} alt="GI Janes logo" />
  </header>
`;
