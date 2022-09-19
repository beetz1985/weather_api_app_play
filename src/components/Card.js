import React from "react";

function Card(props) {

    return (
        <article className="card-item" value={props.location}>
            <h2>{props.location}</h2>
            <button value={props.location} onClick={props.removeCard}>+</button>
        </article>
    )
}

export default Card