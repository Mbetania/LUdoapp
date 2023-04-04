import React, { useEffect, useState } from 'react'
import { useAlertStore } from '../../store'

export const InputText = ({isDisabled,value,textProps, onChange}) => {
    const {placeholder,labelTxt,id} = textProps
    const alert = useAlertStore(state => state.alert)
    const [isFailed, setIsFailed] = useState(false)

    useEffect(() => {

        if(isFailed) {
            setTimeout(() => {
                setIsFailed(false)    
            }, 4500)
        }
        
    }, [isFailed])

    useEffect(() =>{
        const { message, success } = alert
        if(message){
            const isKeyInvalid = (message === 'No se ha podido autenticar')
            setIsFailed(isKeyInvalid || (!success && !value))
        }
        
    }, [alert])


    
return (
    <label className='d-flex flex-column label-text'>
        {labelTxt}
        <input 
        value={value}
        disabled={isDisabled}
        className={isFailed ? 'border-fail' : undefined}
        onChange={onChange} 
        id={id} 
        type="text" 
        placeholder={placeholder} 
        />
    </label>
)
}
