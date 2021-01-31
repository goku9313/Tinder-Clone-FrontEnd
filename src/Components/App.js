import React from "react";

import Header from "./Header"
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import "../Styling/App.css"

const App = () => {
    return (
        <div className= "App_content">
            <Header />

            <TinderCards />
            <SwipeButtons />
        </div>
    )
}

export default App;