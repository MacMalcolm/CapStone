import html from "html-literal";
// import { formSubmit } from "../scripts";
export default () => html`
  <h3>Contact Content</h3>
  <form id="contactForm" action="" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5"></textarea>

    <input type="submit" name="submit" value="submit message" />
  </form>
`;
