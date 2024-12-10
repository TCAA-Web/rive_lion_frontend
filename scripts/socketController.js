import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

// Initializes the socket IO connection
export const socket = io("https://stellar-muffin-8bae97.netlify.app");
export const ioSocket = socket.connect(
  "https://stellar-muffin-8bae97.netlify.app"
);
