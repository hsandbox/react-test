import React from "react";

let renderText = null;
const timeout = msec =>
  new Promise(resolve => {
    setTimeout(resolve, msec);
  });

const OtherComponent = props => {
  if (!renderText) {
    throw new Promise(resolve => {
      timeout(props.duration).then(() => {
        renderText = `Hello Lazy Component #${props.id}`;
        resolve();
      });
    });
  }

  return <p>{renderText}</p>;
};

export default OtherComponent;
