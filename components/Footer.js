import html from "html-literal";

export default state => html`
  <h1 class="footer">
    <ul>
      <li><h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3></li>
      <li>EventualEmail@Email.com</li>
      <li><a href="https://www.facebook.com/gijane636">G.I. Jane Facebook Page</li>
</ul>
</h1>
`;
