import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/onboarding/Login'
import { NavOnboarding } from '../pages/onboarding/NavOnboarding'

const clientRoutes = 'ludo'

export const IndexRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${clientRoutes}/`} >
          <Route path='onboarding' element={<NavOnboarding client={clientRoutes}/>}>
            <Route path='login' element={<Login/>}/>
          </Route>
          <Route path='panel'>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

