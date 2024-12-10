let initial_hungerLevel = 100;
let isEating;
let isSad;
let healthValue;

// Creates the rive instance
let riveInstance = new rive.Rive({
  src: "../assets/lion_thing.riv",
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
