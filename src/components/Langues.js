import React from 'react'
import Skill from './Skill'
import SectionTitle from './SectionTitle'

const Langues = () => {
    return (
        <div>
            <SectionTitle icon='far fa-comments' title='LANGUES' />
            <Skill title='Anglais' x='9' />
            <Skill title='Italien' x='9' />
            <Skill title='Arabe' x='8' />
        </div>
    )
}

export default Langues
