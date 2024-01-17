import html from "html-literal";
import oops from "../../assets/img/oops-404.jpg";

export default () => html`
  <div id="oops404">
    <img src=${oops} alt="View not found!" />
  </div>
`;
