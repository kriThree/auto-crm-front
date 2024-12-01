import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../shared/ui/input/Input"
import Wrapper from "../../shared/ui/wrapper/Wrapper"

export const Login = () => {

  const changeEmailHandler = () => {

  }

  const changePasswordHandler = () => {

  }


  return (
    <div className='flex w-full h-full'>
      <h1>
        Login
      </h1>
      <h2>Are you login? Go to <Link to="/register">register</Link></h2>
    </div>
  )
}

