import React, { useState } from 'react'
import Link from 'next/link'

interface NavBarProps {

}

export const NavBar: React.FC<any> = () => {

    const [VerticalMenu, setVerticalMenu] = useState<boolean>(false)

    const toggleMenu = async () => {
        console.log('gowno');
    }

    return (
        <div className="mb-2 shadow-lg navbar bg-neutral text-neutral-content">
            <div className="flex-none px-2 mx-2">
                <Link href="/">
                        <a className="text-lg font-bold">
                        PoProstuWitold
                        </a>
                </Link>
            </div> 
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch hidden lg:flex">
                <a className="btn btn-ghost btn-sm rounded-btn">
                    Home
                </a> 
                <Link href="/me">
                <a className="btn btn-ghost btn-sm rounded-btn">
                    Me
                </a>
                </Link>
                <a className="btn btn-ghost btn-sm rounded-btn">
                    Contact
                </a>
                </div>
            </div> 
            <div className="flex-none">
            <button onClick={toggleMenu}>
                Menu
            </button>
        </div>
        </div>
    )
}