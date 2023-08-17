export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let metalOptionsHTML = `<h4>Select which type of metal you'd like: </h4>`;

  const metalStringArray = metals.map((metal) => {
    return `<input type="radio" name="metal" value="${metal.id}"/>${metal.metal}  `;
  });

  metalOptionsHTML += metalStringArray.join(" ");

  return metalOptionsHTML;
};
