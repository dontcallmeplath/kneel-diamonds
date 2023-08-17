// set up the transient state data structure and provide initial values
const transientState = {
  metalId: 0,
  styleId: 0,
  sizeId: 0,
};

// exportable setter functions to update the value of each property
export const setMetalId = (chosenMetal) => {
  transientState.metalId = chosenMetal;
  console.log(transientState.metalId);
};
export const setStyleId = (chosenStyle) => {
  transientState.styleId = chosenStyle;
  console.log(transientState.styleId);
};
export const setSizeId = (chosenSize) => {
  transientState.sizeId = chosenSize;
  console.log(transientState.sizeId);
};
