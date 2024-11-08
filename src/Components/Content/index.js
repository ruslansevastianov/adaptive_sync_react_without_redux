import React, { useState } from "react";
import './style.css';
import ExpanderList from "../ExpanderList";
import ShowList from '../ShowList';


const Content = ({ optionsTitles, optionsForCheckbox, configContent }) => {

    const [value1, setValue1] = useState([]);
    const [value2, setValue2] = useState([]);
    const [value3, setValue3] = useState([]);
    const [value4, setValue4] = useState([]);
    const [isShow, setIsShow] = useState(false); // состояние для sideBar, если надо открыть меню, тогда Компонет ShowList прячем, чтобы двойного скролла не было

    let collectionSelectedValues = [value1, value2, value3, value4]; // array - имен каждого состояния компонента Checkbox
    let collectionSetValues = [setValue1, setValue2, setValue3, setValue4]; // array  - имен-функций для установки состояния каждого компонента Checkbox

    return(
        <div className="blockContent">
                <ExpanderList optionsTitles ={ optionsTitles } optionsForCheckbox = { optionsForCheckbox } optionsforValues = { collectionSelectedValues } optionsforSet = { collectionSetValues } isShow = {isShow} setIsShow = {setIsShow} />
                <ShowList configContent = { configContent } collectionValues = { collectionSelectedValues } isShow = {isShow}/>
        </div>
        )
}

export default Content;

