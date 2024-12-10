import { ioSocket } from "./socketController.js";
import { healthValue, isEating, isSad } from "./riveController.js";

// Updates rive values with received status updates from server
ioSocket.on("status", (data) => {
  console.log("Health", healthValue);
  console.log("Mood is sad", isSad);
  console.log("incoming data", data);
  healthValue.value = data.hunger;
  isSad.value = data.isSad;
});

// Fires animation when client receives a feed update from server
ioSocket.on("feed", () => {
  isEating.fire();
});
