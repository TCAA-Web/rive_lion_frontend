import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

// Initializes the socket IO connection
export const socket = io("https://rivebackendlion.netlify.app");
export const ioSocket = socket.connect("https://rivebackendlion.netlify.app");
