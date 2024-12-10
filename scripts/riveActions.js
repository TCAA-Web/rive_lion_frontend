import { isEating } from "./riveController.js";
import { ioSocket } from "./socketController.js";
const btn = document.getElementById("feedButton");

// Function to feed (emits a feed event to server which updates health status and plays animation)
export const feed = () => {
  isEating.fire();
  console.log("isEating", isEating);
  ioSocket.emit("feed");
};

// Bind input to button in HTML
btn.onclick = () => feed();
