import { setSizeId } from "./transientState.js";

export const CaratOptions = async () => {
  document.addEventListener("change", handleSizeChoice);

  const response = await fetch("http://localhost:8088/sizes");
  const carats = await response.json();

  let sizeOptionsHTML = `<h4>Select which carat weight you'd like: </h4>`;

  const sizeStringArray = carats.map((size) => {
    return `<div><input type="radio" name="carat" value="${size.id}"/>${size.carats}</div>`;
  });

  sizeOptionsHTML += sizeStringArray.join(" ");

  return sizeOptionsHTML;
};

const handleSizeChoice = (event) => {
  if (event.target.name === "carat") {
    setSizeId(parseInt(event.target.value));
  }
};
