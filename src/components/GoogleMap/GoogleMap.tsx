import React from "react";
import { Map } from "@vis.gl/react-google-maps";

const GoogleMap = () => {
    return (
        <Map
            apiKey={"AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"}
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
        />
    );
};

export default GoogleMap;
