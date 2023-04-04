import React from 'react'
import { BsBox } from 'react-icons/bs'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiDollarSign} from 'react-icons/fi'
import { Alerts } from '../../components/Alerts'
import { Outlet } from 'react-router'
import ludoLogo from '../../assets/logo-ludo.png'
import { NavLink } from 'react-router-dom'



export const NavPanel = ({client}) => {
    return (
        <main
        id='nav-panel'
        className='w-100 h-100 row '
        >
            <span className='col-1' />
            <Navigation client={client} />
            <section className={`col-8  outlet-onboarding`}>
                <Alerts />
                <Outlet />
            </section>
        </main>
    )
}
const Navigation = () => {
    return (
        <nav className={`col-3 row pt-5`}>
            <div className='col-2'>
            </div>
            <NavSteps />
        </nav>
    )
}
const NavSteps = () => {
    const steps = [

        {icon:<BsBox size='1.3rem'/> , message: 'Ordenes', target: 'table' },
        {icon:<FiDollarSign size='1.3rem'/> ,message: 'Tarifas', target: 'rates' },
        {icon:<HiOutlineShoppingBag size='1.3rem'/> ,message: 'Tiendas', target: 'stores' },


    ]

    return (
        <section>
            {steps.map(({target,message,icon}, index) => {
                return (
                    <li key={index}>
                        <NavLink to={target}>
                            {icon} {message}
                        </NavLink>
                    </li>
                )
            })}
        </section>
    )
}