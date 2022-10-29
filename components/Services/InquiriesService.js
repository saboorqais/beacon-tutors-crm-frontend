import axios from "axios"

const baseURL ="http://localhost:3004/inquiries" 

export default async ()=>{
const promise = await axios.get(baseURL)
    return promise
}
