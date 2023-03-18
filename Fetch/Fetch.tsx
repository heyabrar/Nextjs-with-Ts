import axios from "axios"

export const GetProducts = ( ) =>{
    return axios.get(`https://api.escuelajs.co/api/v1/categories`)
}

export const GetSingleProduct = (id : any) =>{
    return axios.get(`https://api.escuelajs.co/api/v1/categories/${id}`)
}