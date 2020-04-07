import styles, { colorPalette } from "./styles.jsx";
import run from "uebersicht";

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "8px"
};

const desktopStyle = {
  width: "3ch",
};

const indexToBinary = index => index.toString(2).padStart(4, 0);

const renderSpace = (space, index) => {
  const style = {
    color: colorPalette[index % 6],
    marginRight: 5
  }

  const { label, type, index: spaceIndex, focused } = space;

  const nativeFullscreen = space['native-fullscreen'] === 1;

  return (
    <div style={style}>
      {!!focused && '['}
        {label.length ? label : indexToBinary(spaceIndex)}
        {space.type === 'float' && !nativeFullscreen && "°"}
      {!!focused && ']'}
    </div>
  )
}

const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const spaces = [];

  output.forEach((space, index) => {
    spaces.push(renderSpace(space, index));
  });

  return (
    <div style={containerStyle}>
      {spaces}
    </div>
  );
};

export default render;
