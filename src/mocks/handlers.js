import { rest } from "msw";


const baseURL= 'https://localhost:3000/api/v1'

export const handlers= [
    rest.post(`${baseURL}/onboarding/login`, (req, res, ctx) =>{
        return res(
            ctx.json({
                data:{
                    success: true,
                    message: 'Se han ingresado las credenciales con éxito'
                }
            })
        )
    }),
    rest.get(`${baseURL}/onboarding/stores`,(req, res, ctx) =>{
        return res(
            ctx.json({
                data:{
                    isAllActive: false,
                    stores: [
                        {
                            storeName: 'Mc Donals 1024',
                            address: 'Av. Colon 2034',
                            userData:{
                                userName: 'Betania',
                                userLastName: 'Gonzalez',
                                phoneNumber: '2234506798',
                                additionalNotes:'PRECAUCIÓN es un paquete frágil',                       
                            },
                            isInDeliveryArea: false,
                        },
                        {
                            storeName: 'PorroMatic 0023',
                            address: 'Scicilia 7000',
                            userData:{
                                userName: 'Bruno',
                                userLastName: 'Martín',
                                phoneNumber: '2234506666',
                                additionalNotes:'Que llegue a destino xdios',                       
                            },
                            isInDeliveryArea: true,
                        },
                        {
                            storeName: 'El Imperio Indio',
                            address: 'joey 999',
                            userData:{
                                userName: 'Bruno',
                                userLastName: 'Simone',
                                phoneNumber: '2235678223',
                                additionalNotes:'Con Joey shihab',                       
                            },
                            isInDeliveryArea: true,
                        }
                    ]
                }
                
            })
        )
    })
]