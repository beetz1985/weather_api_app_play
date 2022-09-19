import React from "react";
import CallApi from "./service/CallApi";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Header from './components/Header';
import MockData from "./service/MockData";

function App() {

    const [data, setData] = React.useState(MockData)

    const [tickets, setTickets] = React.useState([]);
    const [cards, setCards] = React.useState([]);

    React.useEffect(()=>{
        //CallApi();
        setTickets(data);
    }, [data])

 
    function handleTickClick(e) {
        e.preventDefault();

        const el = e.target.value;
        setTickets(s=>s.filter(v=>v.location !== el))
        const item = data.find(v=>v.location === el)
        setCards(s=>[...s, item])
    }

    function handleRemoveCard(e) {
        e.preventDefault();

        const el = e.target.value;
        setCards(s=>s.filter(v=>v.location !== el))
        const item = data.find(v=>v.location === el)
        setTickets(s=>[item, ...s])
    }

    return (
        <>
            <Header/>
            <main className="main-content">
                <SideBar data={tickets} selectTicket={handleTickClick}/>
                <Main data={cards} removeCard={handleRemoveCard}/>
            </main>
        </>
    )
}

export default App