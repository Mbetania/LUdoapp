import React, { useEffect } from 'react'
import { useAlertStore } from '../store'

export const Alerts = () => {
    const alert = useAlertStore(state=>state.alert)
    const cleanAlert= useAlertStore(state=> state.cleanAlert)
    useEffect(() => {
        if(alert.message){
            setTimeout(()=>{
                cleanAlert()
            },3000)
        }
    }, [alert])
    
return (
    <div>{alert.message}</div>
)
}
