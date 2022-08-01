import React from 'react'
import { useStores } from '../hooks/onboarding/useStores'

export const LocationContainer = () => {
    const { onSubmit,body, onChange } = useStores()
    return (
        <form onSubmit={onSubmit} >
            <GlobalSwitch onChange={onChange} isAllActive={body?.isAllActive}/>
            <ul><ItemSwitch body={body}/></ul>
            <div className = 'd-flex justify-content-around align-items-center' >
                <button className='btn btn-ludo' type='submit'>Atrás</button>
                <button className='btn btn-ludo'>
                Siguiente
                </button>
            </div>
        </form>
    )
}

const ItemSwitch = ({body}) => {
    //body.stores[0].tanto
    // const detailBody = body.stores[0].storeName
    return (
        
        <li className='d-flex flex-row p-3 justify-content-evenly '>
            <a href="">holaa</a>
            <a href="">chuaa</a>
            <a href="">siguiente</a>
        </li>
    )
}

const GlobalSwitch = ({isAllActive, onChange}) => {

    return (
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="isAllStoresActive" checked={isAllActive} onChange={onChange}/>
            <label class="form-check-label" for="isAllStoresActive">Activar todas las tiendas</label>
        </div>
    )
}