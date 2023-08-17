import { setStyleId } from "./transientState.js";

export const StyleOptions = async () => {
  document.addEventListener("change", handleStyleChoice);

  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let styleOptionsHTML = `<h4>Select which style you'd like: </h4>`;

  const styleStringArray = styles.map((style) => {
    return `<div><input type="radio" name="style" value="${style.id}"/>${style.style}</div>`;
  });

  styleOptionsHTML += styleStringArray.join(" ");

  return styleOptionsHTML;
};

const handleStyleChoice = (event) => {
  if (event.target.name === "style") {
    setStyleId(parseInt(event.target.value));
  }
};
