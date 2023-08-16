export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let styleOptionsHTML = `<h4>Select which style you'd like: </h4>`;
  for (const type of styles) {
    styleOptionsHTML += `<input type="radio" name="style" value="${type.id}"/>${type.style}  `;
  }
  return styleOptionsHTML;
};
