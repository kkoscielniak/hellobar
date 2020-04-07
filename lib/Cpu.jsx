import styles, { colors } from "./styles.jsx";

const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const { loadAverage } = output; 

  return (
    <div style={loadAverage > 3 ? { color: styles.colors.red } : null}>
      <span>cpu {loadAverage}</span>
    </div>
  );
};

export default render;
