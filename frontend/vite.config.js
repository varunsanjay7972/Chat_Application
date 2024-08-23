import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import https from 'https';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            // "/api": {
            //     target: "https://chat-application-backend-63yg.onrender.com/",
            // },
            '/api': {
                target: 'https://chat-application-backend-63yg.onrender.com/',
                changeOrigin: true,
                secure: false, // This disables SSL verification (not recommended for production)
                agent: new https.Agent({
                    rejectUnauthorized: false, // This allows self-signed certificates
                }),
            },
        },
    },
});