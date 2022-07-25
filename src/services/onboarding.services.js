import { post as restPost } from "./shared/rest.service";

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