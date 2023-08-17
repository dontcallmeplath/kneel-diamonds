export const CaratOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const carats = await response.json();

  let sizeOptionsHTML = `<h4>Select which carat weight you'd like: </h4>`;

  const sizeStringArray = carats.map((size) => {
    return `<input type="radio" name="carat" value="${size.id}"/>${size.carats}  `;
  });

  sizeOptionsHTML += sizeStringArray.join(" ");

  return sizeOptionsHTML;
};
