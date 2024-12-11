/**
 * This file contains all the Rive logic. It handles loading the rive file, setting default values
 * and "extracts" all state machines. Once the animation has loaded it sets our local variables (isEating, isSad, etc.)
 * to the values we have in our state machine. It then exports all those values so we can manipulate them in other functions.
 */

let initial_hungerLevel = 100;
let isEating;
let isSad;
let healthValue;

// Creates the rive instance
let riveInstance = new rive.Rive({
  src: "../../assets/lion_thing.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  stateMachines: ["controller", "health"],
  onLoad: () => {
    // Set canvas size
    riveInstance.resizeDrawingSurfaceToCanvas();

    // Intialize all inputs
    let controller_inputs = riveInstance.stateMachineInputs("controller");
    let hp_inputs = riveInstance.stateMachineInputs("health");
    isEating = controller_inputs?.find((i) => i.name === "isEating");
    isSad = controller_inputs?.find((i) => i.name === "isSad");
    healthValue = hp_inputs?.find((i) => i.name === "hp");

    // Set default input values
    health.value = initial_hungerLevel;
  },
});

export { healthValue, isEating, isSad, riveInstance };
