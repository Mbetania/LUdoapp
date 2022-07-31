import React from 'react'
import { useStores } from '../hooks/onboarding/useStores'

export const LocationContainer = () => {
const {onSubmit} = useStores()
return (
    <form onSubmit={onSubmit} >
        <button className='btn btn-ludo' type='submit'>enviar</button>
    </form>
)
}

const ItemSwitch = () => {
    return(
        <li>
            {}
        </li>
    )
}

const GlobalSwitch = () =>{

    return(
        <>
        dsa
        </>
    )
}