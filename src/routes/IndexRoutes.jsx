import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/onboarding/Login'
import { NavOnboarding } from '../pages/onboarding/NavOnboarding'
import { AnimatePresence } from 'framer-motion'
import { Locations } from '../pages/onboarding/Locations'
import { NavPanel } from '../pages/panel/NavPanel'
import { Table } from '../pages/panel/Table'

const clientRoutes = 'ludo'

export const IndexRoutes = () => {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path={`/${clientRoutes}/`} >
            <Route path='onboarding' element={<NavOnboarding client={clientRoutes} />}>
              <Route path='login' element={<Login />} />
              <Route path='location' element={<Locations />} />
              <Route path='taxes' element={<Login />} />
            </Route>
            <Route path='panel' element={<NavPanel client={clientRoutes}/>}>
                <Route path='table' element={<Table/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  )
}

