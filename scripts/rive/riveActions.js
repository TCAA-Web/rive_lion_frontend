import { isEating } from "../rive/riveController.js";
import { ioSocket } from "../socket/socketController.js";

/**
 * This file contains all the "actions" our rive animation should be capable of such as
 * the "feed" function. We can import our references to the Rive variables and trigger them, update them etc.
 * inside the functions we write here.
 */

const btn = document.getElementById("feedButton");

// Function to feed (emits a feed event to server which updates health status and plays animation)
export const feed = () => {
  isEating.fire();
  console.log("isEating", isEating);
  ioSocket.emit("feed");
};

// Bind input to button in HTML
btn.onclick = () => feed();
