import React from 'react'

const Skill = (props) => {
    
    return (
        <div id='skill'>
            <p className='pskill'>{props.title}</p>
            <p className='pskill'>{SkillOn(props.x)}{SkillOf(props.x)}</p>
        </div>
    )
}

const SkillOn = (x) => {
    var toAppend = [];
    for (let i = 0; i < x; i++) {
        toAppend.push(<i class="fas fa-circle"></i>)
    }
    return toAppend
}

const SkillOf = (x) => {
    var num = 10-x
    var toAppend = [];
for (let i = 0; i < num; i++) {
    toAppend.push(<i class="far fa-circle"></i>)    
}
    return toAppend
}

export default Skill