import * as React from "react";
const { Suspense } = React;

const OtherComponent = React.lazy(() => import("./codeSplitting2"));

export const LazyLoadComponent = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <OtherComponent />
    </Suspense>
  );
};
