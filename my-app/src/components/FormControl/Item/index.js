import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const Item = ({data, setData, item, index}) => {
    const deleteElement = (id) => {
        const newArray = data.filter((item, index) => index !== id);
        setData(newArray);
    }

    return (
        <div className='inline-block'>
            <div className='d-flex'>
                <div contentEditable={false} className='w-6' id={index} ></div>
                <div contentEditable={false} className='text-gray-500 bg-gray-200 border border-gray-500 inline-block p-1'>
                    {item.name} <span className='pl-2'><FontAwesomeIcon icon={faWindowClose} onClick={() => deleteElement(index)}/></span>
                </div>
            </div>
        </div>
    )
}

export { Item };