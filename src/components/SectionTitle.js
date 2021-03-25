import { React } from "react"

const SectionTitle = (props) => {
    return (
        <div>
            
            <h3><i className={props.icon}></i><div className='soustitre'>{props.title}</div></h3>
        </div>
    )
}

export default SectionTitle
