import axios from "axios"
import { restPaths, rootPath } from "../../../config/restPaths"

export const login = async (email: string, password: string) => {

    const loginReq = {
        email,
        password
    }


}
export const register = async (email: string, name: string, password: string) => {
    const registerReq = {
        email,
        name,
        password
    }

    const registerRes = await axios.post(`${restPaths.register}`, registerReq)

    return registerRes
}
export const authorize = async () => {

    const authorizeRes = await axios.get(`${rootPath}/user/authorize`)

    return authorizeRes
}
