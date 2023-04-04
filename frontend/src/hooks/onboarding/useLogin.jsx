import React from 'react'
import { useState } from 'react'
import { postLogin } from '../../services/onboarding.services'
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

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(body)
        if( validateForm() ){
            try {
                const result = await postLogin(body, 'Betania')
                const {message, success} = result.data
                console.log(result.data)
                setAlert({message: message, success:success})
            } catch (error) {
                setAlert({message: 'Ocurrió un error al conectar.', success:false})
            }
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
