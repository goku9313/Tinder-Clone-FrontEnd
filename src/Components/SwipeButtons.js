import React from 'react'

import "../Styling/SwipeButtons.css"
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ReplayIcon from '@material-ui/icons/Replay';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
    return (
        <div className= "swipeButtons">
            <IconButton className= "swipeButtons_Close">
                <CloseIcon fontSize= "large"></CloseIcon>
            </IconButton>
            <IconButton className= "swipeButtons_Replay">
                <ReplayIcon fontSize= "large"></ReplayIcon>
            </IconButton>
            <IconButton className= "swipeButtons_StarRate">
                <StarRateIcon fontSize= "large"></StarRateIcon>
            </IconButton>
            <IconButton className= "swipeButtons_Favorite">
                <FavoriteIcon fontSize= "large"></FavoriteIcon>
            </IconButton>
            <IconButton className= "swipeButtons_FlashOn">
                <FlashOnIcon fontSize= "large"></FlashOnIcon>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
