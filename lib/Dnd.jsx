import { colors } from "./styles.jsx";

const style = {
  color: colors.red
}

const render = ({ output }) => output !== 0 && <div style={style}>dnd</div>;

export default render;
