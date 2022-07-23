import React from 'react'
import { useState } from 'react'

export const useLogin = () => {
    const [body, setBody] = useState()
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(body)
    }
    const onChange=(e)=>{
        const { value, id } = e.target
        setBody({...body, [id]: value })
    }

    
    return {
        onSubmit,
        onChange
    }
}
