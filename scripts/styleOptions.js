export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let styleOptionsHTML = `<h4>Select which style you'd like: </h4>`;

  const styleStringArray = styles.map((style) => {
    return `<input type="radio" name="style" value="${style.id}"/>${style.style}  `;
  });

  styleOptionsHTML += styleStringArray.join(" ");

  return styleOptionsHTML;
};
