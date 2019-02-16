import React from "react";
import { render } from "react-dom";

const App = ({title}) => (
  <div>
    <h2>{title}</h2>
    <p>
      Some indexable content rendered client-side using React.
      
      Deployed using <a href="https://zeit.co/now">Zeit now.</a>
    </p>
  </div>
);

render(<App title="A test, a post" />, document.querySelector("#__"));
