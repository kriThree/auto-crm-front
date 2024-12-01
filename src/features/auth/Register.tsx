import { useNavigate } from "react-router-dom"
import { Button } from "../../shared/ui/button/Button"
import { Input } from "../../shared/ui/input/Input"
import { registerAction } from "./action/register"
import { routerPaths } from "../../config/routerPaths"

export const Register = () => {

  const { formEvents: formHooks } = registerAction()
  const navigate= useNavigate();

  const confirmHandler = () => {
    formHooks.confirm()
    navigate(routerPaths.home.to)
  }

  return (
    <div className='flex flex-col w-full h-full justify-center items-center'>
      <h1 className="text-3xl">
        Registration
      </h1>
      <form className={`mt-20 px-5 py-10 border-2 border-black
        rounded-md`}
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          useChangeHandler={formHooks.name}
          text="Name"
        />
        <Input
          useChangeHandler={formHooks.email}
          text="Email"
        />
        <Input
          useChangeHandler={formHooks.password}
          text="Password"
          type="password"
        />
        <Input
          useChangeHandler={formHooks.confirmPassword}
          text="Confirm password"
          type="password"
          className="mb-10"
        />
        <Button
          text="Confirm registation"
          onClick={confirmHandler}
          className="float-right"
        />
      </form>
    </div>
  )
}

