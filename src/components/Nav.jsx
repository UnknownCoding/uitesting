import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <div className='sticky top-0 flex justify-around '>
            <Link href='/'>
                <h1 className='text-2xl font-black'>LOGO</h1>
            </Link>
            <div className='flex items-center space-x-10'>
                <Link href='/test1'>
                    Test1
                </Link>          
                <Link href='/test2'>
                    Test2
                </Link>
            </div>
        </div>
    )
}

export default Nav