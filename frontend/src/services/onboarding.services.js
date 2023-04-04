import { post as restPost, get as restGet } from "./shared/rest.service";

export const postLogin= async(body, clientId) =>{
    const endpoint = 'onboarding/login'
    const params = {clientId: clientId}
    try{
        const result = await restPost(endpoint, body, params)
        return result.data
    }catch(error){
        return error
    }
}

export const getStores = async( clientId) => {
    const endpoint = 'onboarding/stores'
    const params = {clientId: clientId}
    try{
        const result = await restGet(endpoint,params)
        return result.data
    }catch(error){
        return error
    }
}