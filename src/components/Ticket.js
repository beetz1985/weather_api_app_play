import React from "react";

function Ticket(props) {

    return (
        <div id={props.id} value={props.location} className="ticket-item" >
            <h2>{props.location}</h2>
            <button id={props.id} value={props.location} onClick={props.selectTicket}>+</button>
        </div>
    )
}

export default Ticket