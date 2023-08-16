export const CaratOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const carats = await response.json();
  console.log(carats);

  let caratOptionsHTML = `<h4>Select which carat weight you'd like: </h4>`;
  for (const size of carats) {
    caratOptionsHTML += `<input type="radio" name="carat" value="${size.id}"/>${size.carats}  `;
  }
  return caratOptionsHTML;
};
