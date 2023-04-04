import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

export const post = async(endpoint, body, params, header) =>{
    try{
        const url = `${baseURL}/api/v1/${endpoint}`
        const result = await axios({
            method: 'POST',
            url,
            params:params,
            data:body
        })
        return result
    }
    catch(error){
        const message = await error?.response.data.error
        throw new Error (message)
    }
}
export const get = async(endpoint, params, header) =>{
    try{
        const url = `${baseURL}/api/v1/${endpoint}`
        const result = await axios({
            method: 'GET',
            url,
            params:params,
        })
        return result
    }
    catch(error){
        const message = await error?.response.data.error
        throw new Error (message)
    }
}