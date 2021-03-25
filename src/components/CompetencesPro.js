import React from 'react'
import SectionItem from './SectionItem'
import SectionTitle from './SectionTitle'
import Skill from './Skill'

const CompetencesPro = () => {
    return (
        <div>
            <SectionTitle icon='fa fa-cogs' title='COMPETENCES PRO' />
            <Skill title='Web' x='6' />
            <Skill title='UI | UX Design' x='8' />
            <Skill title='Graphic Design' x='4' />
            <Skill title='Brand Design' x='4' />
            <Skill title='Networking' x='9' />
        </div>
    )
}

export default CompetencesPro
