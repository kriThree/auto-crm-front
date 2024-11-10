import React from "react"
import {Sidebar} from "../sidebar/Sidebar"

const Wrapper = ({ children }: React.PropsWithChildren) => {
    return (
        <div className='w-full h-full flex'>
            <Sidebar  />
            {children}
        </div>
    )
}


export default Wrapper
