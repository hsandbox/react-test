import React from "react";
import ReactDOM from "react-dom";

import {
  UseStateSample,
  UseStateSample2,
  UseStateSample3
} from "./component/useStateSample";
import { UseReducerSample } from "./component/useReducerSample";
import { UseEffectSample } from "./component/useEffectSample";
import { UnContextApp, ContextApp, ContextAppHooks } from "./component/context";
import { LazyLoadComponent } from "./component/codeSplitting";
import { ErrorBoundary, BuggyCounter } from "./component/errorBoundary";
import SuspenseList from "./component/suspenseList";

const title = "React Test Flight";

ReactDOM.createRoot(document.getElementById("app")).render(
  <>
    <p>{title}</p>
    <UseStateSample />
    <hr />
    <UseStateSample2 />
    <hr />
    <UseStateSample3 />
    <hr />
    <UseReducerSample />
    <hr />
    <UseEffectSample />
    <hr />
    <UnContextApp />
    <hr />
    <ContextApp />
    <hr />
    <ContextAppHooks />
    <hr />
    <LazyLoadComponent />
    <hr />
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
    <hr />
    <SuspenseList />
  </>
);

module.hot.accept();
