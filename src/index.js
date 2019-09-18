import React from "react";
import ReactDOM from "react-dom";

import json from "./constants/data";

import Recursive from './components/Recursive';

import './index.css';

const App = () => <Recursive data={json} keyName={null}/>

ReactDOM.render(<App />, document.getElementById("root"));
