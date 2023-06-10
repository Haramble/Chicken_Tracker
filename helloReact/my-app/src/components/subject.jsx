import React from "react";

function Subject(props) {

    return (
    <header>
        <h1>WEB</h1>
        world wide web!
        <button onClick={props.testFunc}>test!!</button>
        <div>{props.testText}</div>
    </header>
    );
}

export default Subject