import { paths } from '../../config/paths'
import React from 'react'
import SidebarItem from './SidebarItem'
import { useLocation } from 'react-router-dom'

export interface SidebarLink {
    to: string
    name: string
    image: string
}

const sideBarLinks: SidebarLink[] = [
    {
        to: paths.home.from,
        name: "Home",
        image: "/house.svg"
    },
    {
        to: paths.autoservices.from,
        name: "Autoservices",
        image: "/city.svg"
    },
    {
        to: paths.cars.from,
        name: "Cars",
        image: "/car.svg"
    }
]
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Sidebar = (props: SidebarProps) => {

    const location = useLocation();
    console.log(location, sideBarLinks)
    return (
        <div
            {...props}
            className={'border-r-2 bord border-black p-5 flex flex-col justify-between ' + props.className}
        >
            <div className='flex flex-col'>
                {sideBarLinks.map((link, index) => (
                    <SidebarItem
                        link={link}
                        key={index}
                        isSelect={location.pathname === link.to} />
                ))}
            </div>
            <SidebarItem
                className='mb-0'
                link={{ to: paths.settings.to, name: "Settings", image: "/gear.svg" }}
                isSelect={location.pathname === paths.settings.from}
            />
        </div>
    )
}

export { Sidebar }   