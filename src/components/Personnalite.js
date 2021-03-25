import React from 'react'
import Skill from './Skill'
import SectionTitle from './SectionTitle'

const Personnalite = () => {
    return (
        <div>
            <SectionTitle icon='fas fa-bars' title='PERSONNALITE' />
            <Skill title='Reactif' x='8' />
            <Skill title='Ambitieux' x='4' />
            <Skill title='Creatif' x='10' />
            <Skill title='Pugnace' x='7' />
        </div>
    )
}

export default Personnalite
