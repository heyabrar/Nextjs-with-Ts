import axios from "axios"

export const GetProducts = ( ) =>{
    return axios.get(`https://api.escuelajs.co/api/v1/categories`)
}

export const GetSingleProduct = (id : any) =>{
    return axios.get(`https://api.escuelajs.co/api/v1/categories/${id}`)
}

export const GetTodoData = ( ) =>{
    return axios.get(`https://witty-lime-scallop.cyclic.app/todo`)
}


export const PostTodoData = (payload : any) =>{
    return axios.post(`https://witty-lime-scallop.cyclic.app/todo`, payload)
}

export const PatchTodoData = (payload : any,id:number) =>{
    return axios.patch(`https://witty-lime-scallop.cyclic.app/todo/${id}`, payload)
}


export const DeleteTodoData = (id:number) =>{
    return axios.delete(`https://witty-lime-scallop.cyclic.app/todo/${id}`)
}
