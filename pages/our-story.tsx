import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OurStory from "@/components/OurStory/OurStory"
import StoryImage from '@/components/OurStory/StoryImage';
import StoryText from '@/components/OurStory/StoryText';

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