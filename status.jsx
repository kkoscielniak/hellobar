import DateTime from "./lib/DateTime.jsx";
import Battery from "./lib/Battery.jsx";
import Cpu from "./lib/Cpu.jsx";
import Wifi from "./lib/Wifi.jsx";
import Dnd from "./lib/Dnd.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles, { colors } from "./lib/styles.jsx";

const style = {
  display: "grid",
  padding: "0 12px",
  gridAutoFlow: "column",
  gridGap: "20px",
  position: "fixed",
  overflow: "hidden",
  right: 0,
  top: 0,
  color: colors.white,
  ...styles,
};

export const refreshFrequency = 5000;

export const command = "./hellobar/scripts/status.sh";

export const render = ({ output }) => {
  const data = parse(output);

  if (typeof data === "undefined") {
    return (
      <div style={style}>
        <Error msg="Error: unknown script output" side="right" />
      </div>
    );
  }
  return (
    <div style={style}>
      <Cpu output={data.cpu} />
      <Wifi output={data.wifi} />
      <Battery output={data.battery} />
      <DateTime output={data.datetime} />
      <Dnd output={data.dnd} />
    </div>
  );
};

export default null;
