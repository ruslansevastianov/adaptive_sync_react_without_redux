import React, { useState, useRef} from "react";
import './style.css';
import Checkbox from "../Checkbox";

const Expander = ({ title, optionForCheckbox, optionValues, optionSet}) => {

    let myRef = useRef();

    const [isOpen, setIsOpen] = useState(true);

    let openedClosed; // переменная для состояния экспандера
    let downUp; // переменная состояния стрелки

    if(isOpen){
        openedClosed = `content h`;
        
        downUp = 'arrow arrowUp'
        setTimeout(() => { openedClosed += ' show' },0)
    }else{
        openedClosed = 'content';
        downUp = 'arrow'
        setTimeout(() => { openedClosed += ' notShow' }, 400)
    }


    return(
        <div className="expanderBlock">
            <div className="header" onClick={() => {
                setIsOpen(!isOpen);
             }}>
                { title }
                <div id="arrow" className={ downUp }></div>
            </div>
            <div className={ openedClosed } ref={myRef}>
             <Checkbox option = { optionForCheckbox } optionValues = { optionValues } optionSet = { optionSet }/>
            </div>
        </div>
    )
}
export default Expander;
