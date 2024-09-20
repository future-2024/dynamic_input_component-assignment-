import React, { useState, useEffect, useRef } from 'react'
import { useClickAway } from 'react-use'

import { getFetch } from '../../services/fetch';
import { Item } from './Item'
import { RenderSelect } from './RenderSelect';
import { RenderNormal } from './RenderNormal';
import { ENTER_EVENT, BACKSPACE_EVENT } from '../../context/type';

const FormControl = () => {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [inputTag, setInputTag] = useState(null);
    const [selId, setSelId] = useState(false);
    const rootRef = useRef(null)

    useClickAway(rootRef, () => {
        setInputTag(data.map((item, index) => {
            return <Item data={data} setData={setData} item={item} index={index} />
        }));
    })

    // Getting data from json file.
    useEffect(() => {
        fetch();
    }, []);  
    const fetch = async () => {
        const fetchData = await getFetch();
        setSearchData(fetchData);
    }

    useEffect(() => {
        setInputValue("");
        setInputTag(data.map((item, index) => {
            return <Item data={data} setData={setData} item={item} index={index} />
        }));
    }, [data]);  

    const deleteElementByBackspace = (id) => {
        if(!id) {
            const newArray = data.filter((item, index) => index !== data.length - 1);
            setData(newArray);
        } else {
            const newArray = data.filter((item, index) => index !== id - 1);
            setData(newArray); 
        }
    }

    const keyEvent = (event) => {
        switch (event.key) {
            case ENTER_EVENT: {
                if(inputValue) {                           
                    let newArray = data.slice();
                    selId === "" ? newArray.push({name: inputValue}) : newArray.splice(selId, 0, {name: inputValue});
                    normalizeValue(newArray);
                }
                break;
            }
            case BACKSPACE_EVENT: {
                event.target.localName === "input" ? setInputValue(inputValue.slice(0, -1)) : deleteElementByBackspace(selId)
                break;
            }
            default:
                if(event.keyCode >= 48 && event.keyCode <= 90)
                    setInputValue(inputValue + event.key);
                break;
        }
    }     

    const normalizeValue = (newArray) => {
        setData(newArray);
        setInputValue("");
        setSelId("");
    }

    const  _renderNormalFunction = (id) => {
        setInputTag(<RenderNormal data={data} setData={setData} searchData={searchData} id={id} />);     
    }

    const _renderSelectFunction = (id) => {
        setSelId(id);
        setInputTag(<RenderSelect data={data} setData={setData} searchData={searchData} id={id} />);
    }

    const focusEventHandler = (e) => {
        if(e.target.id === "EditComponent") {
            setSelId("");
            _renderNormalFunction(e.target.id);
        } else if (e.target.id !== "") {
            _renderSelectFunction(e.target.id);
        }   
    }

    if(!searchData) {
        return <>Loading</>;
    }

    return (
        <>
            {searchData && searchData.length > 0 ? (<div> Loading </div>) : (
                <div className='border-gray-400 border-2 rounded-xl p-2 h-96 w-auto overflow-y-auto' 
                    contentEditable={true} 
                    onKeyDown={(event) =>keyEvent(event)}
                    onClick={e => focusEventHandler(e)}
                    ref={rootRef}
                    id="EditComponent"
                >
                    {inputTag}
                </div>
            )}
        </>
    );
}

export { FormControl };
