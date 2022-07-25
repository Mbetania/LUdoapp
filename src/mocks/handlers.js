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
    })
]