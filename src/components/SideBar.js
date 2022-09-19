import React from "react";
import Ticket from './Ticket'

function SideBar(props) {
    
    const locationElements = props.data.map((v, i)=>{
        return <Ticket key={i} value={v.location} id={i} {...v} selectTicket={props.selectTicket}/>
    })

    return (
        <section className="sidebar-left">
            {locationElements}
        </section>
    )
}

export default SideBar