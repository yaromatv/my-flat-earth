import React from "react";
import { createRoot } from "react-dom/client";
import {
    APIProvider,
    Map,
    MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";

const App = () => (
    <APIProvider
        apiKey={"YOUR_API_KEY"}
        onLoad={() => console.log("Maps API has loaded.")}
    >
        <h1>Hello, world!</h1>
        <Map
            defaultZoom={13}
            defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
            onCameraChanged={(ev: MapCameraChangedEvent) =>
                console.log(
                    "camera changed:",
                    ev.detail.center,
                    "zoom:",
                    ev.detail.zoom
                )
            }
        ></Map>
    </APIProvider>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);

export default App;
