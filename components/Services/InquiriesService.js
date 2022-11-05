import axios from "axios"



export default async (id)=>{
    const baseURL =`http://localhost:3004/inquiries?_page=${id}&_limit=9`
const promise = await axios.get(baseURL)
    return promise
}

export  const  GetInquiry = async(id)=>{
    const baseURL =`http://localhost:3004/inquiries/${id}`
const promise = await axios.get(baseURL)
    return promise
}

export  const  GetTotal = async()=>{
    const baseURL =`http://localhost:3004/inquiries/`
const promise = await axios.get(baseURL)
    return promise
}

export  const  DeleteInquiry = async(id)=>{
    const baseURL =`http://localhost:3004/inquiries/${id}`
const promise = await axios.delete(baseURL)
    return promise
}



