import React from "react"
import {Sidebar} from "../sidebar/Sidebar"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const Wrapper = ({ children }: React.PropsWithChildren) => {
    return (
        <div className='w-full h-full flex'>
            <Sidebar  />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </div>
    )
}


export default Wrapper
