import { setMetalId } from "./transientState.js";

export const MetalOptions = async () => {
  document.addEventListener("change", handleMetalChoice);

  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let metalOptionsHTML = `<h4>Select which type of metal you'd like: </h4>`;

  const metalStringArray = metals.map((metal) => {
    return `<input type="radio" name="metal" value="${metal.id}"/>${metal.metal}  `;
  });

  metalOptionsHTML += metalStringArray.join(" ");

  return metalOptionsHTML;
};

const handleMetalChoice = (event) => {
  if (event.target.name === "metal") {
    setMetalId(parseInt(event.target.value));
  }
};
