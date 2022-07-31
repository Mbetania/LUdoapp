import React from 'react'
import { LocationContainer } from '../../components/LocationContainer'

export const Locations = () => {
  return (
    <main id='locations-container'>
      <header>
          <h2>Tus tiendas</h2>
          <h3>Activa y agrega información a tus tiendas para incluir en Ludo.</h3>
      </header>
      <LocationContainer/>
    </main>
  )
}
