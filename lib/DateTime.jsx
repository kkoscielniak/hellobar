const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const { date, time } = output;

  return (
    <div>
      {date}&nbsp;{time}
    </div>
  );
};

export default render;
