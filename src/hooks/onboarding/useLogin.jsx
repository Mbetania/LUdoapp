import React from 'react'
import { useState } from 'react'
import { useAlertStore } from '../../store'

export const useLogin = () => {
    const [body, setBody] = useState(initialBody)
    const [isLoading, setIsLoading] = useState(false)
    const setAlert = useAlertStore(state=>state.setAlert)

    const validateForm= () =>{
        const { userId, companyId, apiKey, apiSecret } = body
        if( userId && companyId && apiKey && apiSecret ){
            return true
        }else{
            return false
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(body)
        if( validateForm() ){
            setAlert({success:true, message:'Se ha verificado con éxito'})
        }else{
            setAlert({success:false, message: ' Complete todos los campos'})
        }
    }
    const onChange=(e)=>{
        const { value, id } = e.target
        setBody({...body, [id]: value })
    }

    
    return {
        onSubmit,
        onChange,
        isLoading,
        body
    }
}

const initialBody = {
    userId: '',
    companyId:'',
    apiSecret:'',
    apiKey:'',
}
