// set up the transient state data structure and provide initial values
const transientState = {
  metalId: 0,
  styleId: 0,
  sizeId: 0,
};

// exportable setter functions to update the value of each property
export const setMetalId = (chosenMetal) => {
  transientState.metalId = chosenMetal;
};
export const setStyleId = (chosenStyle) => {
  transientState.styleId = chosenStyle;
};
export const setSizeId = (chosenSize) => {
  transientState.sizeId = chosenSize;
};

export const orderPlaced = async () => {
  /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
  const postOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions);

  // const customOrderEvent = new CustomEvent("newOrderCreated");
  // document.dispatchEvent(customOrderEvent);

  const customChangeEvent = new CustomEvent("stateChanged");
  document.dispatchEvent(customChangeEvent);
};
