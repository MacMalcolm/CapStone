import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { after, capitalize } from "lodash";
import axios from "axios";
import {
  FormSub,
  GetMessages,
  DeleteMessage,
  GetWeather,
  SquadUpdate,
  GetSquads
} from "./components/scripts";
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
  console.log(`In after render and STATE is:${state.view}`);
  const view = state.view;
  document.querySelector(".headerTest").addEventListener("click", change);
  switch (view) {
    case "Contact":
      FormSub(state, store, router, axios);
      break;
    case "Messages":
      DeleteMessage(state, store, router, axios);
      SquadUpdate(state, store, router, axios);
      break;
    default:
      break;
  }
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
    GetWeather(done, store, router, axios);
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      // New Case for the Home View
      case "Home":
        break;

      case "Messages":
        GetMessages(done, store, router, axios);
        break;
      case "Schedule":
        GetSquads(done, store, router, axios);
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
