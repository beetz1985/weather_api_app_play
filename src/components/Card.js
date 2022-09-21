import React from "react";

function Card(props) {
    
    const [modalState, setModalState] = React.useState(false);

    function toggleModal(e) {
        e.preventDefault();
        setModalState((s)=>{
            return (s) ? false : true
        })
    }
 
    

    return (
        <>
        {modalState && 
            <>
            <div className="modal-background"></div>
            <article className="card-modal" value={props.location.name}>
                <div className="modal-col-1">
                    <h2>{props.location.name}</h2>
                    <h4>{props.location.country}</h4>
                    <p>Condition: {props.current.condition.text}</p>
                    <p>Temp: {props.current.temp_c}</p>
                    <p>Humidity: {props.current.humidity}</p>
                    <p>Wind: {props.current.gust_mph}mph</p>
                    <button className="modal-btn" onClick={toggleModal}>-</button>
                </div>
                <div className="modal-col-2">
                    <h2>Forecast</h2>
                    <h4>{props.forecast.forecastday[0].date}</h4>
                    <p>High: {props.forecast.forecastday[0].day.maxtemp_c}</p>
                    <p>Low: {props.forecast.forecastday[0].day.mintemp_c}</p> 
                    <p>Condition: {props.forecast.forecastday[0].day.condition.text}</p>
                    <p>Max Wind: {props.forecast.forecastday[0].day.maxwind_mph}mph</p>
                </div>
            </article> 
            </>
        }
        

        <article className="card-item" value={props.location.name}>
            <h2>{props.location.name}</h2>
            <h4>{props.location.country}</h4>
            <p>Condition: {props.current.condition.text}</p>
            <p>Temp: {props.current.temp_c}</p>
            <p>Humidity: {props.current.humidity}</p>
            <p>Wind: {props.current.gust_mph}mph</p>
            <button value={props.location.name} onClick={props.removeCard}>+</button>
            <button className="modal-btn" value={props.location.name} onClick={toggleModal}>+</button>
        </article>        
        
        </>

    )
}

export default Card