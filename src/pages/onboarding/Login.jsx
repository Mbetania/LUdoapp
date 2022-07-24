import React from 'react'
import { Link } from 'react-router-dom'
import { InputText } from '../../components/form/Inputs'
import { useLogin } from '../../hooks/onboarding/useLogin'


export const Login = () => {
    const {onSubmit, onChange} = useLogin()
    return (
        <section id='onboarding-login'>
            <header className='mt-2 mt-xxl-5 d-flex flex-column justify-content-center align-items-center'>
                <h2 className='title--title'>Ingresa tus credenciales de Ludo</h2>
                <h3 className='title--subtitle'>Conectá tu cuenta de Ludo con Shopify</h3>
                <h3 className='title--subtitle'>¿No conoces tus credenciales?<Link to='' >Contáctanos</Link></h3>
            </header>
            <article className='d-flex flex-column mt-5 align-items-center'>
                <form onSubmit={onSubmit} className='d-flex flex-column align-items-center w-50'>
                    <InputText onChange={onChange} textProps={userIdProps} />
                    <InputText onChange={onChange} textProps={companyIdProps}/>
                    <InputText onChange={onChange} textProps={apiKey}/>
                    <InputText onChange={onChange} textProps={apiSecret}/>
                    <button type='submit' className='mt-5 w-50 py-2 btn btn-primary'>Ingresar</button>
                    <span className='account-build mt-3'>Si todavía no la tienes <Link to='#'>Crea tu cuenta </Link></span>
                </form>
            </article>
        </section>
    )
}

const userIdProps ={
    id:'userId',
    placeholder:'1234',
    labelTxt:'User ID'
}
const companyIdProps={
    id:'companyId',
    placeholder:'1234',
    labelTxt:'Company ID'
}
const apiKey={
    id:'apiKey',
    placeholder:'1234',
    labelTxt:'Api Key'
}
const apiSecret={
    id:'apiSecret',
    placeholder:'1234',
    labelTxt:'Api Secret'
}