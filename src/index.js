import React from 'react';
import ReactDom from 'react-dom';

function Greetings() {
    return <div><h1>Hello world!</h1></div>
};

ReactDom.render(<Greetings/>, document.getElementById("root"));