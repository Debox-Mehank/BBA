import React from 'react'
import Catering from '../components/Catering'
import Navbar from '../components/Navbar'
import CateringOptions from '@/components/CateringOptions'
import CateringPackages from '@/components/CateringPackages'
import PartyPackage from '@/components/PartyPackage'
import PartyTrays from '@/components/PartyTrays'
import CateringForm from "@/components/CateringForm"
import CateringCard from '@/components/CateringCard'
import Footer from '@/components/Footer'

const catering = () => {
  return (
    <div>
        <Navbar/>
        <Catering/>
        <CateringOptions/>
        <CateringPackages/>
        <CateringCard/>
        <PartyPackage/>
        <PartyTrays/>
        <CateringForm/>
        <Footer/>
    </div>
  )
}

export default catering