import React from 'react'
import { LocationContainer } from '../../components/LocationContainer'

export const Locations = () => {
  return (
    <main id='locations-container' className=' ms-4 ms-xxl-5'>
      <header>
          <h2>Tus tiendas</h2>
          <h3>Activa y agrega información a tus tiendas para incluir en Ludo.</h3>
      </header>
      <LocationContainer/>
    </main>
  )
}
