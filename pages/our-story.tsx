import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OurStory from "@/components/OurStory"
import StoryImage from '@/components/StoryImage';
import StoryText from '@/components/StoryText';

const ourStory = () => {
  return (
    <div>
        <Navbar/>
        <OurStory/>
        <StoryImage/>
        <StoryText/>
        <Footer/>

    </div>
  )
}

export default ourStory