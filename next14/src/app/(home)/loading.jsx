import React from "react";
import  './loading.css';
const Loading = () => {
  return (
    <div
      style={{ marginBlock: "9rem", textAlign:"center" }}
    >
    {/* <div className="lds-ring"><div></div><div></div><div></div><div></div></div> */}
    <div className="loader">Loading...</div>
    </div>
  );
};

export default Loading;