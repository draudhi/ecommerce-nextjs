import React from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'

const Header = () => {
    return (
        <header className='border-b border-b-gray-400 py-5'>
            <Container className='flex items-center md:items-center justify-between gap-7 text-[#A8741A]'>
                {/* Logo */}
                <div className='w-1/3 flex items-center gap-2.5'>
                    <MobileMenu />
                    <Logo>MyStore</Logo>
                </div>


                {/* Mid Bar */}
                <div className='w-1/3 md:w-1/3 flex justify-center'>
                    <HeaderMenu />
                </div>


                {/* Right Bar */}
                <div className='w-1/3 md:w-1/3 flex items-center justify-end gap-5'>
                    <SearchBar />
                    <CartIcon />
                    <div>
                        <button className='text-sm font-semibold hover:bg-[#8d6113] hoverEffect bg-[#A8741A] text-white px-4 py-2 rounded-md'>LOGIN</button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header