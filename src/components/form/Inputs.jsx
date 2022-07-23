import React from 'react'

export const InputText = ({textProps, onChange}) => {
    const {placeholder,labelTxt,id} = textProps

return (
    <label className='d-flex flex-column'>
        {labelTxt}
        <input 
        onChange={onChange} 
        id={id} 
        type="text" 
        placeholder={placeholder} 
        />
    </label>
)
}
