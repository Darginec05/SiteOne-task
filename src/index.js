import React from "react";
import ReactDOM from "react-dom";
import json from "./constants";
import Recursive from './Recursive';

const App = () => <Recursive data={json} keyName={null} rootProperty={true}/>

ReactDOM.render(<App />, document.getElementById("root"));
