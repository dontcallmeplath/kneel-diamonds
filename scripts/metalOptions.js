export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let metalOptionsHTML = `<h4>Select which type of metal you'd like: </h4>`;
  for (const type of metals) {
    metalOptionsHTML += `<input type="radio" name="metal" value="${type.id}"/>${type.metal}  `;
  }
  return metalOptionsHTML;
};
