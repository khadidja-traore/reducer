import React from 'react'
import {useLocation} from 'react-router-dom'

function Marketing() {

    const location = useLocation();
    console.log(location)
    return (
        <div> Voici le service Marketing, {location.pathname} </div>
    )
}

export default Marketing