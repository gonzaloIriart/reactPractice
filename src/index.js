import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const employees = [{name : 'Gonzalo Iriart', job : 'Developer', age: '25',company : 'a'},
{name : 'Jorge perez', job : 'Developer', age: '29',company : 'b'},
{name : 'Natalia Lopez', job : 'Developer', age: '23',company : 'c'}];

function People() {
    return (<section>
    <Person person = {employees[0]}><p>more info</p></Person>
    <Person person = {employees[1]}/>
    <Person person = {employees[2]}/>
        </section>)
};

const Person = props=>{

    const {name,job,age,company} = props.person;
    const {children} = props;
    return (
        <div>
            <h1>{name}</h1>
            <p>{job}</p>
            <p>{age}</p>
            <p>{company}</p>
            <p>{children}</p>
            <hr />
        </div>
        );
};


ReactDom.render(< People/>, document.getElementById("root"));