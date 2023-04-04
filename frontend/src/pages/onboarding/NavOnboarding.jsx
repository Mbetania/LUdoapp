import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Alerts } from '../../components/Alerts'
import ludoLogo from '../../assets/logo-ludo.png'

export const NavOnboarding = ({ client }) => {
    return (
        <main className='w-100 h-100 row '>
            <Navigation client={client} />
            <section className={`col-8  outlet-onboarding`}>
                <Alerts />
                <Outlet />
            </section>
        </main>
    )
}

const Navigation = ({ client }) => {
    return (
        <nav className={`col-4 bg-${client} row pt-5`}>
            <div className='col-2'>
            </div>
            <aside className='col-4'>
                <img src={ludoLogo} className=" w-100 " />
            </aside>
            <NavSteps />
        </nav>
    )
}

const NavSteps = () => {
    const steps = [

        { message: 'Ingresa tus credenciales', target: 'login' },
        { message: 'Configura tus locaciones', target: 'location' },
        { message: 'Configura las tarifas', target: 'taxes' },


    ]

    return (
        <section>
            {steps.map(({target,message}, index) => {
                return (
                    <li key={index}>
                        <NavLink to={target}>
                            {message}
                        </NavLink>
                    </li>
                )
            })}
        </section>
    )
}
