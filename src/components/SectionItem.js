import React from 'react'

const SectionItem = (props) => {
    return (
        <div id='sectionItem'>
            <div id='titreSection'><h4 id='titre'>{props.titre}</h4><p id='sstitre'>{props.soustitre}</p></div>
            <p id='paragrapheSection'>{props.paragraphe}</p>
        </div>
    )
}

export default SectionItem
