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
        if(tickets.length + cards.length < data.length) {
            data.forEach((v)=>{
                CallApi({locationCity: v.location})
                    .then(returnData=>setTickets((s)=>{
                        return [...s, returnData]
                    }))
            })            
        }
    }, [data])

    //console.log(tickets)
 
    // console.log(tickets)
    // console.log(cards)
    // console.log("---")

    function handleTickClick(e) {
        e.preventDefault();

        const el = e.target.value;
        const item = tickets.find(v=>v.location.name === el)
        setTickets(s=>s.filter(v=>v.location.name !== el))
        setCards(s=>[...s, item])
    }

    function handleRemoveCard(e) {
        e.preventDefault();

        const el = e.target.value;
        const item = cards.find(v=>v.location.name === el)
        setCards(s=>s.filter(v=>v.location.name !== el))
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