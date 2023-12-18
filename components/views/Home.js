import html from "html-literal";
import { Post } from "./posts";

export default state => html`
  <h1 id="janesHQ">Janes HQ</h1>
  ${Post};
`;
