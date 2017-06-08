import React from 'react';
import {render} from 'react-dom';
import webpack from "./webpack.jpg";
import "./index.css";
import "./index.less";

class App extends React.Component {
    render() {
        return (
          <div>
            <img src={webpack} alt="webpack图片"></img>
            <p> hello react </p>
          </div>
        )
    }
}
render(<App />, document.getElementById('app'));
