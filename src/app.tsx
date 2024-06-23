import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { APIProvider } from "@vis.gl/react-google-maps";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import Cuboid from "./components/Cuboid/Cuboid";

const App = () => {
    const [cameraData, setCameraData] = useState({
        info: {
            lat: "0",
            lng: "0",
            zoom: "0",
        },
        snapshot: "",
    });

    const handleCameraChange = (data) => {
        setCameraData(data);
        console.log("cameraData: ", cameraData);
    };

    const sendDataToAPI = () => {
        fetch("http://localhost:3000/api/maps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cameraData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Data sent successfully!");
                } else {
                    console.error("Failed to send data.");
                }
            })
            .catch((error) => {
                console.error("Error sending data:", error);
            });
    };

    return (
        <APIProvider
            apiKey={"AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"}
            onLoad={() => console.log("Maps API has loaded.")}
        >
            <GoogleMap onCameraChange={handleCameraChange} />
            <Cuboid />
            <button onClick={sendDataToAPI}>
                FLAT
                <br />
                MY
                <br />
                EARTH
            </button>
        </APIProvider>
    );
};

export default App;

const root = createRoot(document.getElementById("app"));
root.render(<App />);
