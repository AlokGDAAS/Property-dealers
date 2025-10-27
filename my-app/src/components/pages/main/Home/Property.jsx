import React from 'react'
import { assets } from '../../../../assets/assets'
import { ImPhone } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
import WhatsAppButton from '../../../utils/Whatsapp';


const Card =()=>{
    return(
        <div className='flex md:flex-row flex-col  p-2 bg-[var(--primary_2)] rounded-lg my-4'>
            <div className='md:w-4/12'>
              <img src={assets.plots_1} alt='plots_1' className='md:w-120 rounded-lg'/>
            </div>
            
            <div className='md:px-8 flex flex-col justify-between  md:w-8/12'>
            <div className=''>
                <p className='text-lg font-semibold text-[var(--gray)]'>Property Type - Plot</p>
                <p>Available for - sell</p>
                <p>Plot Area - 100 sqyd</p>
                <p>Width of facing road - 20 feet</p>
                <p>Location - G.T. Road Sindauli Aligarh</p>
                <p>Nearby - Dhanipur Mandi</p>
            </div>
            <div className='flex md:gap-[8rem] justify-between md:justify-start my-4'>
                <div className='flex items-center md:gap-8 gap-4 bg-blue-600 px-4 md:py-2 py-1 text-white text-lg rounded-full font-semibold '><ImPhone className='text-2xl'/><p>Call</p></div>
              {/* <div className='flex items-center md:gap-8 gap-4 bg-[var(--whats_app)] px-4 md:py-2 py-1 text-white text-lg rounded-full font-semibold'><ImWhatsapp className='text-2xl'/><p>Whats App</p></div> */}
                <WhatsAppButton/>
              
            </div>
            </div>

        </div>
    )
}

const Property = () => {
  return (
    <div>
        <div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Property