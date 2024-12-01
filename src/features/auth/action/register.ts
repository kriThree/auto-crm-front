import { useState } from "react"
import { register } from "../api/user"
import { useMutation } from "@tanstack/react-query"
import useAuth from "../store/auth"

interface FormHooksI {
    name: changeHandler
    email: changeHandler
    password: changeHandler
    confirmPassword: changeHandler
    confirm: () => void
}
type changeHandler = () => [string, (value: string) => void]

interface useRegisterI {
    formEvents: FormHooksI;
}

export const registerAction = (): useRegisterI => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const setAuth = useAuth(register => register.setAuth);

    const registerUserMutation = useMutation({
        mutationFn: () => register(email, name, password)
    })


    const confirm = async () => {
        registerUserMutation.mutate()
        setAuth(registerUserMutation.data?.data.token)
    }

    return {
        formEvents: {
            email: () => [email, setEmail],
            name: () => [name, setName],
            password: () => [password, setPassword],
            confirmPassword: () => [confirmPassword, setConfirmPassword],
            confirm,

        }
    }
}   