import React, { useEffect } from 'react'
import { useState } from 'react'
import { getStores } from '../../services/onboarding.services'

export const useStores = () => {
    const [body, setBody] = useState()
    useEffect(() => {
        loadInitial()
    }, [])
    
    const loadInitial = async () =>{
        try{
            const res = await getStores()
            setBody(res.data)
        }
        catch (error){
            console.log(error)
        }
    }
    const onSubmit = (e)=>{
        console.log(e)
        e.preventDefault()
    }
    const onChange=(e)=>{
        const {} = e.target
        setBody({...body, isAllActive: !body.isAllActive})
    }
return {
    onSubmit,
    body,
    onChange
}
}
