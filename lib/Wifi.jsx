const render = ({ output }) => {
  if (typeof output === 'undefined') 
    return null;

  const { status, ssid } = output;
  
  if (status === 'inactive') 
    return <div>no wifi</div>;
    
  return <div>ssid {ssid}</div>;
};

export default render;
