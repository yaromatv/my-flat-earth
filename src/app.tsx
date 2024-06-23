import React from "react";
import { createRoot } from "react-dom/client";
import { APIProvider } from "@vis.gl/react-google-maps";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import Cuboid from "./components/Cuboid/Cuboid";

const App = () => (
    <APIProvider
        apiKey={"AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"}
        onLoad={() => console.log("Maps API has loaded.")}
    >
        <GoogleMap />
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
