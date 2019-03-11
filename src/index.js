import React from 'react';
import ReactDom from 'react-dom';

function Greetings() {
    return (<div>
        <Person />
        <Message />
        </div>)
};

const Person = () => <h1>John Doe</h1>
const Message = () => <p>Hello, this is the message</p>

ReactDom.render(<Greetings/>, document.getElementById("root"));