import React from 'react'
import {Outlet, Link} from 'react-router-dom'

function Services() {
    return (
        <div> 
            <p>Voici la liste de nos Services</p> 
            <nav>
                <Link to="/services/marketing">Service Marketing</Link>
                <Link to="/services/developpement">Service Developpement</Link>
            </nav>

            <Outlet/>
        </div>
    )
}

export default Services