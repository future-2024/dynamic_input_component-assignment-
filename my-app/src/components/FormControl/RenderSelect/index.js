import React from 'react'
import Select from 'react-select';
import { Item } from '../Item';

const RenderSelect = ({data, setData, searchData, id}) => {    
    // Add item into array();
    const inputData = async (e, id) => {
        let newArray = data.slice();
        newArray.splice(id, 0, {name: e.value});
        setData(newArray);          
    }
    return (
        <>
            {data.map((item, index) => {
                if(id == index) {
                    return<>
                        <Select
                            onChange={(val) => inputData(val, index)}
                            options={searchData.items}
                            contenteditable="false"
                            className='inline-block w-50 left-4 top-0'
                        />
                        <Item data={data} setData={setData} item={item} index={index} />
                    </>
                }
                else {
                    return <Item data={data} setData={setData} item={item} index={index} />
                }             
            })}
        </>
    )
}

export { RenderSelect };