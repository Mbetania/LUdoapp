import React from 'react'
import ludoLogo from '../assets/logo-ludo.png'


export const Welcome = () => {
return (
    <main id='welcome-container' className=' d-flex flex-column p-4 p-xxl-5 justify-content-around align-items-center '>
        <aside className='pb-5 pb-xxl-4 col-1 '>
            <img src={ludoLogo} className="w-100" />
        </aside>
        <section className='mt-4 bg-ludo'>
            <h1 className='fw-bold '>Conecta Ludo con Shopify</h1>
            <ul className='pt-2 pt-xxl-3'>
                <li>Ingresa tus credenciales</li>
                <li>Configura tus locaciones</li>
                <li>Configura las tarifas</li>
            </ul>
        </section>
        <button className='btn btn-primary p-2-5 w-25 mt-4 mt-xxl-5 btn-ludo col-4'>
            Atrás
        </button>
        
    </main>
)
}
