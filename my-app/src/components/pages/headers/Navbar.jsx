import React from 'react'
import { assets } from '../../../assets/assets'

const Navbar = () => {
  return (
    <div>
        <div className='bg-[var(--primary)] p-2'>
            <div className='md:w-10/12 mx-auto flex items-center justify-between md:justify-start'>
            <div className='md:w-3/12'>
               <img src={assets.logo_3} alt='logo_3' className='w-38 bg-[var(--secondary)] rounded-lg'/>
            </div>
                
            <div className='w-6/12 hidden md:block'>
              <ul className='flex gap-16 justify-center font-semibold text-lg navlink-ul'>
                <li>Home</li>
                <li>Plots</li>
                <li>About Us</li>
                <li>Contacts</li>
              </ul>
            </div>
            <div className='md:w-3/12'>
                 <p className='text-lg font-semibold cursor-pointer'>Log in</p>
            </div>
            </div>



        </div>
    </div>
  )
}

export default Navbar