import React from "react";
import ReactDOM from "react-dom";

import {
  UseStateSample,
  UseStateSample2,
  UseStateSample3
} from "./component/useStateSample";

import { UseEffectSample } from "./component/useEffectSample";

import { UnContextApp, ContextApp, ContextAppHooks } from "./component/context";

import { LazyLoadComponent } from "./component/codeSplitting1";

import { ErrorBoundary, BuggyCounter } from "./component/errorBoundary";

const title = "My Minimal React Webpack Babel Setup";

ReactDOM.render(
  <>
    <p>{title}</p>
    <UseStateSample />
    <UseStateSample2 />
    <UseStateSample3 />
    <UseEffectSample />
    <UnContextApp />
    <ContextApp />
    <ContextAppHooks />
    <LazyLoadComponent />
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
  </>,
  document.getElementById("app")
);

module.hot.accept();
