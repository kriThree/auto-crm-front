import { useMutation } from "@tanstack/react-query"
import { Router } from "./router/Router"
import { register } from "../features/auth/api/user"


export const App = () => {

    const registerUserMutation = useMutation({
        mutationFn: () => register(email, name, password)
    }) 
    
    return (
        <Router />
    )
}

