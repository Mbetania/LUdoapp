import React, { useEffect } from 'react'
import { useAlertStore } from '../store'
import {BiErrorCircle,} from 'react-icons/bi'
import {BsPatchCheck, BsPatchExclamation} from 'react-icons/bs'
import { useState } from 'react'

export const Alerts = () => {
    const alert = useAlertStore(state=>state.alert)
    const { success, message } = alert
    const cleanAlert= useAlertStore(state=> state.cleanAlert)
    const [Icon, setIcon] = useState(<BiErrorCircle size={'1.2rem'}/>)
    useEffect(() => {
        if(message){
            if(success){
                setIcon(<BsPatchCheck size={'1.2rem'}/>)
            }else{
                setIcon(<BsPatchExclamation size={'1.2rem'} />)
            }
            setTimeout(()=>{
                cleanAlert()
            },3000)
        }
    }, [alert])
    
return (
    <section 
    id='alert-container'
    className={`success-${ success}`}
    >
        {message && Icon}
        {message}
        </section>
)
}
