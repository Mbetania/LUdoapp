import React from 'react'
import { Outlet } from 'react-router-dom'
import { Alerts } from '../../components/Alerts'

export const NavOnboarding = ({client}) => {
return (
    <main className='w-100 h-100 row '>
        <Navigation client={client}/>
        <section className={`col-8  outlet-onboarding`}>
            <Alerts/>
            <Outlet/>
        </section>
    </main>
)
}

const Navigation =({client}) =>{
    return(
    <nav className={`col-4 bg-${client}`}>
        navegation
    </nav>
    )
}
