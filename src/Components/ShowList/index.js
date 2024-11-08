import React from "react";
import './style.css';
import { v4 } from 'uuid';

const ShowList = ({ configContent, collectionValues, isShow }) => {

let resultList = []; 
let counter = 0; // счетчик для ослеживания кол-ва значений в состояний
let listValueFromItem = []; // из каждого целевого объекта, создаем массив его значений
let tmpArray = []; // промежеточный(временный) array для того, чтобы хранить массив выбранных блоков состояний, пустые  arrays value не нужны  

// цикл определения заполненных состояний values из каждого компонента Checkbox
for(let i = 0; i < collectionValues.length; i++){
    if(collectionValues[i].length > 0){
        counter++;
    }
}

// цикл определения пустых состояний values из каждого компонента Checkbox
for(let i = 0; i < collectionValues.length; i++){ 
    if(collectionValues[i].length > 0){
            tmpArray.push([...collectionValues[i]]); // делаю деструктуризацию, а не передаю ссылку 
    }
} 


if(counter < 1){ // если никаких значений не выбрано - отображаем это
    for(let i = 0; i < configContent.length; i++){
        resultList.push(
            <div className="itemBlock" key={v4()}>
            <div className="iconBlock">
                    <div className="icon"></div>
            </div>
            <div className="descriptionBlock">
                    <h3> { configContent[i].model } </h3>
                    <div className="textBlock">
                        <p>Призначення: { configContent[i].titlePriznachennia }</p>
                        <p>Стандарт: { configContent[i].standart }</p>
                        <p>Особливості: { configContent[i].osoblivosti } </p>
                    </div>
                </div>
        </div>
        )
    }
}

 if(counter === 1){
    for(let i = 0; i < configContent.length; i++){

        listValueFromItem = Object.values(configContent[i]);

        for(let k = 0; k < collectionValues.length; k++){

            for(let j = 0; j < collectionValues[k].length; j++){

                if(listValueFromItem.includes(collectionValues[k][j])){

                    resultList.push(
                        <div className="itemBlock">
                        <div className="iconBlock">
                                <div className="icon"></div>
                        </div>
                        <div className="descriptionBlock">
                                <h3> { configContent[i].model } </h3>
                                <div className="textBlock">
                                    <p>Призначення: { configContent[i].titlePriznachennia }</p>
                                    <p>Стандарт: { configContent[i].standart }</p>
                                    <p>Особливості: { configContent[i].osoblivosti } </p>
                                </div>
                            </div>
                    </div>
                    )
                }    

            }
        }
    }
}
if(counter > 1){
    for(let i = 0; i < configContent.length; i++){

        let tmp = false; // показатель того, есть ли выбранные значения в текущем объекте

        listValueFromItem = Object.values(configContent[i]);

        for(let j = 0; j < tmpArray.length; j++){

            for(let k = 0; k < tmpArray[j].length; k++){

                if(listValueFromItem.includes(tmpArray[j][k])){
                    tmp = true;
                    break; // значение есть, продолжать итерации на этом шаге дальше не нужно
                }else{
                    tmp = false;                  
                }
            }
            if(tmp){
                continue; // значение есть из предыдущей итерации, можем продолжать итерации в этом цикле
            }else{
                break; // иначе, в этом объекте нет совпадающих значений из состояний компонентов Checkbox, т.е. values, пропускаем этот объект
            }
        }
        if(tmp){ // если в итоге, совпадающие значения есть в объекте, то забираем этот объект 
            resultList.push(
                <div className="itemBlock">
                        <div className="iconBlock">
                                <div className="icon"></div>
                        </div>
                        <div className="descriptionBlock">
                                <h3> { configContent[i].model } </h3>
                                <div className="textBlock">
                                        <p>Призначення: { configContent[i].titlePriznachennia }</p>
                                        <p>Стандарт: { configContent[i].standart }</p>
                                        <p>Особливості: { configContent[i].osoblivosti } </p>
                                </div>
                        </div>
                </div>
            )
        }
    }
}


    return(
        <div className= {isShow ? 'noShowMain' : 'main'} >
            { resultList }
        </div>
    )
}

export default ShowList;

