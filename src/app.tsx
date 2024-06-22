// import "dotenv/config";
import React from "react";
import { createRoot } from "react-dom/client";
import { APIProvider } from "@vis.gl/react-google-maps";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import Cuboid from "./components/Cuboid/Cuboid";

// const { REACT_APP_GMAPS_API_KEY } = process.env;

const App = () => (
    <APIProvider
        apiKey={"AIzaSyCh5gSE3Q_ejdcTm9X-pgHPxqN3QzY84kQ"}
        onLoad={() => console.log("Maps API has loaded.")}
    >
        <GoogleMap apiKey={"AIzaSyCh5gSE3Q_ejdcTm9X-pgHPxqN3QzY84kQ"} />
        <Cuboid />
        <button>
            FLAT
            <br />
            MY
            <br />
            EARTH
        </button>
    </APIProvider>
);

export default App;

const root = createRoot(document.getElementById("app"));
root.render(<App />);
