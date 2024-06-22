import React, { useState, useRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import "dotenv/config";

import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";

import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";

import { Circle } from "./components/circle";

const { REACT_APP_GMAPS_API_KEY } = process.env;

type Poi = { key: string; location: google.maps.LatLngLiteral };
const locations: Poi[] = [
    { key: "auroville", location: { lat: -33.8605523, lng: 151.1972205 } },
];

const App = () => (
    <APIProvider
        apiKey={REACT_APP_GMAPS_API_KEY}
        onLoad={() => console.log("Maps API has loaded.")}
    >
        <Map
            defaultZoom={17}
            defaultCenter={{ lat: 12.0068714, lng: 79.8094594 }}
            mapId="da37f3254c6a6d1c"
            minZoom={3}
            mapTypeId="satellite"
            disableDefaultUI={true}
            restriction={{
                latLngBounds: {
                    north: 85,
                    south: -85,
                    east: 180,
                    west: -180,
                },
                strictBounds: true,
            }}
        >
            <PoiMarkers pois={locations} />
        </Map>
    </APIProvider>
);

const PoiMarkers = (props: { pois: Poi[] }) => {
    const map = useMap();
    const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
    const clusterer = useRef<MarkerClusterer | null>(null);
    const [circleCenter, setCircleCenter] = useState(null);
    const handleClick = useCallback((ev: google.maps.MapMouseEvent) => {
        if (!map) return;
        if (!ev.latLng) return;
        console.log("marker clicked: ", ev.latLng.toString());
        map.panTo(ev.latLng);
        setCircleCenter(ev.latLng);
    });

    return (
        <>
            <Circle
                radius={800}
                center={circleCenter}
                strokeColor={"#0c4cb3"}
                strokeOpacity={1}
                strokeWeight={3}
                fillColor={"#3b82f6"}
                fillOpacity={0.3}
            />
        </>
    );
};

export default App;

const root = createRoot(document.getElementById("app"));
root.render(<App />);
