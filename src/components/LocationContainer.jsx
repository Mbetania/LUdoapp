import React from 'react'
import { useStores } from '../hooks/onboarding/useStores'

export const LocationContainer = () => {
    const { onSubmit,body, onChange } = useStores()
    return (
        <form onSubmit={onSubmit} >
            <GlobalSwitch onChange={onChange} isAllActive={body?.isAllActive}/>
            <button className='btn btn-ludo' type='submit'>enviar</button>
        </form>
    )
}

const ItemSwitch = () => {
    return (
        <li>
            { }
        </li>
    )
}

const GlobalSwitch = ({isAllActive, onChange}) => {

    return (
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="isAllStoresActive" checked={isAllActive} onChange={onChange}/>
            <label class="form-check-label" for="isAllStoresActive">Checked switch checkbox input</label>
        </div>
    )
}