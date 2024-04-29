//single Selection 

import { useState } from "react"
import data from "./data";
import './styles.css'

export default function Accodian(){

     const [selected ,setSelected] = useState(null);

     function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
     }

    return (
        <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                    data.map(dataItems =>  (
                        <div className="item">
                        <div 
                            onClick = {() => handleSingleSelection(dataItems.id)}
                            className="title">
                                <h2>{dataItems.question}</h2>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItems.id ?  <div className="content">{dataItems.answer}</div>: null
                        }
                    </div>
                    ))
                )  : (
                    <div>No Data Found</div> 
               )}
            </div>
        </div>
    )
}