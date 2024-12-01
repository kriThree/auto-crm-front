
export const rootPath = import.meta.env.VITE_API_URL

export const restPaths = {
    login: rootPath + "/user/login",
    register: rootPath + "/user/register",
}