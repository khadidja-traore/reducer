import React from 'react'
import {useParams} from 'react-router-dom'

function Profile() {

    const params = useParams();
    console.log(params);
    return (
        <div> Bonjour {params.id}, Votre Profil : </div>
    )
}

export default Profile