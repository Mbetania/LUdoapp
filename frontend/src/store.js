import create from 'zustand'
import {devtools, persist} from 'zustand/middleware'

let alert = (set) =>({
    alert:{success:null, message:''},
    setAlert:(data) => set(state=>({alert:data})),
    cleanAlert:(data) => set(state=>({alert:{success:null, message:''}}))
})

alert = persist(alert, {name: 'alerts'})
alert = devtools(alert)
export const useAlertStore = create(alert)