import html from "html-literal";

export default state => html`
  <div class="footer">
    <div>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </div>
    <div>EventualEmail@Email.com</div>
    <div>
      <a href="https://www.facebook.com/gijane636">G.I. Jane Facebook Page</a>
    </div>
  </div>
`;
