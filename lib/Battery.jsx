import styles, { colorPalette } from "./styles.jsx";

const getColor = (percentage, charging) => {
  if (charging) {
    return colorPalette[0];
  } 

  if (percentage < 50) {
    return colorPalette[1];
  } 

  if (percentage < 15) {
    return colorPalette[2]; 
  }

  return colorPalette[0]
}

const render = ({ output }) => {
  const { charging, percentage, remaining } = output; 

  return (
    <div
      style={
        {
          color: getColor(percentage, charging)
        }
      }
    >
      <span>{charging ? "chgr" : "bttr"} {percentage}%</span>
    </div>
  );
};

export default render;
