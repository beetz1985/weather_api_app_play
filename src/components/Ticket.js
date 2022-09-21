import React from "react";

function Ticket(props) {


    return (
        <div id={props.id} value={props.location.name} className="ticket-item" >
            <h2>{props.location.name}</h2>
            <button id={props.id} value={props.location.name} onClick={props.selectTicket}>+</button>
        </div>
    )
}

export default Ticket