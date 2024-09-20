import React from 'react'
import Select from 'react-select';
import { Item } from '../Item';

const RenderNormal = ({data, setData, searchData, id}) => {    
    // Add item into array();
    const inputValue = async (e) => {
        let newArray = data.slice();
        newArray.push({name: e.value});
        setData(newArray);   
    }
    
    return (
        <>
            {data.map((item, index) => {
                return  <Item data={data} setData={setData} item={item} index={index} />
            })}
            <Select
                onChange={(val) => inputValue(val, id)}
                options={searchData.items}
                contenteditable="false"
                className='inline-block w-50 left-4 top-0'
            />
        </>
    )
}

export { RenderNormal };