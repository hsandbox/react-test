import React from "react";
const { Suspense, SuspenseList } = React;

const OtherComponent = React.lazy(() => import("./otherComponent"));
const OtherComponent2 = React.lazy(() => import("./otherComponent2"));

export default function SuspenseListComponent() {
  return (
    <SuspenseList revealOrder="forwards" tail="collapsed">
      <Suspense fallback={"Loading..."}>
        <OtherComponent id={1} duration={1000} />
      </Suspense>
      <Suspense fallback={"Loading..."}>
        <OtherComponent2 id={2} duration={500} />
      </Suspense>
    </SuspenseList>
  );
}
