import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarLink } from './Sidebar'

interface Props extends React.HTMLAttributes<HTMLDivElement> { 
    link : SidebarLink,
    isSelect : boolean
}

const SidebarItem = ({link,isSelect ,...props}: Props) => {
    return (
        <div 
        {...props}
        className={`
            flex items-center mb-10 p-2 border-2 border-black
            ${isSelect ? "border-opacity-100" : "border-opacity-0"} 
            ${props.className}`}
        
        >
            <Link to={link.to} >
                <img src={link.image} alt={link.name} className='w-10 h-10' />
            </Link>
            <div className='ml-6'>{link.name}</div>
        </div>
    )
}

export default SidebarItem