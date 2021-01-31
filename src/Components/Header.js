import React from 'react'

import "../Styling/Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import TinderLogo from "./tinder.png"
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const Header = () => {
    return (
        <div className= "header">
            <IconButton>
                <PersonIcon fontSize = "large" className= "header_icon"/>
            </IconButton>
            <img className="tinder_logo" src= {TinderLogo} alt= "" />
            <IconButton>
                <QuestionAnswerIcon fontSize = "large" className= "header_icon"/>
            </IconButton>
        </div>
    )
}

export default Header
