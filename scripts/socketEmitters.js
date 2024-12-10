import { ioSocket } from "./socketController.js";

setInterval(() => {
  ioSocket.emit("getStatus");
}, 1000);
