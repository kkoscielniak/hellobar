import styles from "./styles.jsx";
import run from "uebersicht";

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "8px"
};

const desktopStyle = {
  width: "3ch",
};

const colorPalette = [
  '#5EBD3E',
  '#FFB900',
  '#F78200',
  '#E23838',
  '#973999',
  '#009CDF',
];

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
        {label.length ? label : spaceIndex}
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
