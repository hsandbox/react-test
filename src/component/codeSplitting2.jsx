import * as React from "react";

let renderText = null;
const timeout = msec =>
  new Promise(resolve => {
    setTimeout(resolve, msec);
  });

const LazyLoadComponent2 = () => {
  if (!renderText) {
    throw new Promise(resolve => {
      timeout(1000).then(() => {
        renderText = "Hello Lazy Component";
        resolve();
      });
    });
  }

  return <p>{renderText}</p>;
};

export default LazyLoadComponent2;
