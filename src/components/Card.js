import React from "react";

function Card(props) {
    
    return (
        <article className="card-item" value={props.location.name}>
            <h2>{props.location.name}</h2>
            <h4>{props.location.country}</h4>
            <p>Condition: {props.current.condition.text}</p>
            <p>Temp: {props.current.temp_c}</p>
            <p>Humidity: {props.current.humidity}</p>
            <p>Wind: {props.current.gust_mph}mph</p>
            <button value={props.location.name} onClick={props.removeCard}>+</button>
        </article>

    )
}

export default Card