import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
    const { GOOGLE_MAPS_API_KEY = "" } = loadEnv(mode, process.cwd(), "");

    return {
        base: "/my-flat-earth/",
        define: {
            "process.env.GOOGLE_MAPS_API_KEY":
                JSON.stringify(GOOGLE_MAPS_API_KEY),
        },
        resolve: {
            alias: {
                "@vis.gl/react-google-maps/examples.js":
                    "https://visgl.github.io/react-google-maps/scripts/examples.js",
            },
        },
        server: {
            mimeTypes: {
                "application/javascript": ["js", "mjs"],
            },
        },
    };
});
