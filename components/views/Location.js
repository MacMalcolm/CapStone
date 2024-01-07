import html from "html-literal";

export default () => html`
  <h1>Location</h1>

  <div id="map">
    <div>
      <h2>Location:</h2>
      <p>4750 Mid Rivers Mall Dr,</p>
      <p>Cottleville, MO 63376</p>
    </div>
    <div class="border">
      <img
      src=http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/38.75850386604280,-90.63826653680623/16?mapSize=400,400&pushpin=38.75826286604169,-90.63510653680623;66;GI&mapLayer=Basemap,Buildings&format=jpeg&mapMetadata=0&key=Ag3e5hKTf50vK-ZG693_FH5ZtSzuUNXYgdWMfq-G_81iWoe0yJNnybHfwL6Jn7tX
      />
    </div>
  </div>
`;
