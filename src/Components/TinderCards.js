import React, {useState , useEffect} from 'react'

import "../Styling/TinderCards.css"
import TinderCard from 'react-tinder-card'
import axios from "./axios"

function TinderCards() {
    const [people , setPeople] = useState([]);

    //Similar to componentDidMount
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/card");

            setPeople(req.data);
        }

        fetchData();
    }, []);

    console.log(people);

    const swiped = (direction , nameToDelete) => {
        console.log("removing" + nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " removed from the screen");
    }

    return (
        <div className= "tinder_card">
            {people.map((person) => (
                <TinderCard 
                    className= "swipe"
                    key= {person.name}  
                    preventSwipe= {["up" , "down"]}
                    onSwipe= {(dir) => swiped(dir , person.name)}
                    onCardLeftScreen= {() => outOfFrame(person.name)}
                >
                    <div 
                        style= {{backgroundImage: `url(${person.imgurl})`}}
                        className= "cards"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
                
                ))}
        </div>
    )
}

export default TinderCards
