import { create } from "zustand"

interface AuthStateI {
    isAuth: boolean
    Token : string    
}
interface AuthActionsI {
    setAuth: (token: string) => void
}
const initialState: AuthStateI = {
    isAuth: false,
    Token: '',
   
}

const useAuth = create<AuthStateI & AuthActionsI>(set => ({
    ...initialState,
    setAuth: (token: string) => set({Token: token, isAuth: true})
}))

export default useAuth