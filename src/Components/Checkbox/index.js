import React from "react";
import './style.css';



const Checkbox = ({ option, optionValues, optionSet }) => {

    let listCheckbox = option.map((item) => {
        return (

            <label className="labelBlock">
                <input type="checkbox" value={ item.value } />        
                { item.title }
                <div className="mark"></div>
        </label>

        )
    })
    return (
        <div onChange ={ (event) => {
           if(!optionValues.includes(event.target.value)){
                optionSet([...optionValues, event.target.value]);
           }else{
                optionSet([...optionValues.filter((item) => item !== event.target.value)]) // деструктуризация необязательна, но сделаю
           }
        } }>
            { listCheckbox }
        </div>
    )    
}
export default Checkbox;
