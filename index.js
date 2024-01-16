import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { after, capitalize } from "lodash";
import axios from "axios";
import { FormSub, GetMessages, DeleteMessage } from "./components/scripts";
const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer(store.Footer)}
  `;

  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  document.querySelector(".headerTest").addEventListener("click", change);
  FormSub(state, store, router, axios);
  DeleteMessage(state, store, router, axios);
}
// Commented out code was for learning purposes only. Unhides element by toggling (visibility: hidden;) class on and off.
function change() {
  //const element = document.getElementById("change2");
  //element.classList.toggle("visibleClass");
  const elements = document.querySelectorAll("header.headerTest");
  for (const element of elements) {
    element.classList.toggle("transformed-state");
  }
}

router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      // New Case for the Home View
      case "Home":
        axios
          // Get request to retrieve the current weather data using the API key and providing city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does not provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Footer.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;

      case "Messages":
        GetMessages(done, store, router, axios);
        break;
      // New case for Location
      // case "Location":
      //   axios
      //     // Get request to retrieve map
      //     .get(
      //       // For formatting see: https://learn.microsoft.com/en-us/bingmaps/rest-services/imagery/get-a-static-map
      //       `http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/38.75896286604169,-90.63486653680623/4?mapSize=400,400&pushpin=38.75896286604169,-90.63486653680623;66;GIJ&mapLayer=Basemap,Buildings&format=jpeg&mapMetadata=0&key=Ag3e5hKTf50vK-ZG693_FH5ZtSzuUNXYgdWMfq-G_81iWoe0yJNnybHfwL6Jn7tX`
      //     )
      //     .then(response => {
      //       // Create object to be stored in Location state from the response
      //       store.Location.map = {
      //         response
      //       };
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       done();
      //     });
      // break;
      // Need to include default: done() at end of switch statement.
      default:
        done();

      // New Axios get request utilizing already made environment variable
    }
  },

  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});
//router.on("/", () => render(store.Home)).resolve();

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
