const cakesLoaded = (newCakes) => ({ type: "CAKES_LOADED", payload: newCakes });
const cakesRequested = () => ({ type: "CAKES_REQUESTED" });
const cakesError = (error) => ({ type: "CAKES_ERROR", payload: error });

export { cakesLoaded, cakesRequested, cakesError };
