import html from "html-literal";

// constructing an HTML list of items from the array in Store
//  - .map formats the array elements into html
//      and constructs a new array from the results
//  - .join joins the elements of the new array into one long string
//  - data-navigo is a switch that allows Navigo to handle our page routing

export default links => html`
  <nav class="nav">
    ${links
      .map(
        link =>
          `<links class="navLink"><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></links>`
      )
      .join("")}
  </nav>
`;
