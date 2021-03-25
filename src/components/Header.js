import React from 'react'
import profilimage from '../assets/icon/profil.png'

const Header = () => {
    return (
        <div>
            <img src={profilimage} className='profilimage' />
            <h1 className='name'>RUBEN <br />ANIDJAR</h1>
            <h2 className='title'>ETUDIANT WEBSCHOOL</h2>
        </div>
    )
}

export default Header
