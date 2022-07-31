import React, { useEffect } from 'react'
import { getStores } from '../../services/onboarding.services'

export const useStores = () => {
    useEffect(() => {
        loadInitial()
    }, [])
    
    const loadInitial = async () =>{
        try{
            const res = await getStores()
            console.log(res)
        }
        catch (error){
            console.log(error)
        }
    }
    const onSubmit = (e)=>{
        console.log(e)
        e.preventDefault()
    }
return {
    onSubmit,
}
}
