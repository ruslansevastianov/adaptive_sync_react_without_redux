import React from "react";
import './style.css';
import Expander from "../Expander";


const ExpanderList = ({ optionsTitles, optionsForCheckbox, optionsforValues, optionsforSet, isShow, setIsShow}) => {


    let listExpanders = optionsTitles.map((item, index) => { 
        return(
            <div>
                <Expander title = { item } optionForCheckbox = { optionsForCheckbox[index] }  optionValues = { optionsforValues[index] } optionSet = { optionsforSet[index]  }/>
                <br/>
            </div>
        )
     })

    return(
        <div className= 'sideNav'>
                <div className= 'buttonFiltrHeader' onClick={()=>{ setIsShow(true)}}>
                        Фільтри
                </div> 
                <div className= {isShow ? 'intro2' : 'intro'} >
                        <h3>Фільтри</h3>
                        <div 
                                onClick={()=>{setIsShow(false)}}
                                className="X">
                            X
                        </div>
                </div>
                <div className= {isShow ? 'expanderListBlock2' : 'expanderListBlock'}>  
                        { listExpanders }
                </div>
    </div>
    )
}

export default ExpanderList;