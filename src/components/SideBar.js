import React from "react";
import Ticket from './Ticket'

function SideBar(props) {

    const ticketElements = props.data.map((v, i)=>{
        return <Ticket key={i} id={i} location={v.location.name} {...v} selectTicket={props.selectTicket}/>
    })
    

    return (
        <section className="sidebar-left">
            {ticketElements}
        </section>
    )
}

export default SideBar