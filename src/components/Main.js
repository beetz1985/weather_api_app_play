import React from "react";
import Card from './Card'

function Main(props) {

    const cardElements = props.data.map((v, i)=>{
            return <Card key={i + 100} value={v.location} id={i + 100} {...v} removeCard={props.removeCard}/>
    })

    return (
        <section className="main-panel">
           {cardElements}
        </section>
    )
}

export default Main