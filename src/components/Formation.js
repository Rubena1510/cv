import React from 'react'
import SectionItem from './SectionItem'
import SectionTitle from './SectionTitle'

const Formation = () => {
    return (
        <div>
            <SectionTitle icon='fas fa-book-open' title='FORMATION' />
            <SectionItem titre='DIPLOME'
                soustitre='| UNIVERSITE | 2000 - 2003'
                paragraphe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit, fuga harum illo natus veniam at repellendus magnam ducimus cumque possimus!' />
            <SectionItem titre='DIPLOME'
                soustitre='| UNIVERSITE | 2000 - 2003'
                paragraphe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit, fuga harum illo natus veniam at repellendus magnam ducimus cumque possimus!' />
            <SectionItem titre='DIPLOME'
                soustitre='| UNIVERSITE | 2000 - 2003'
                paragraphe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit, fuga harum illo natus veniam at repellendus magnam ducimus cumque possimus!' />
        </div>
    )
}

export default Formation
