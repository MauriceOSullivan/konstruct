import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/HeroSection/Hero';
import InfoSection from '../components/InfoSection/Data';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Inputs';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggle = () => {
        setIsOpen(!isOpen);
    };
 
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/> 
        <Services/> 
        <InfoSection {...homeObjTwo}/> 
        <InfoSection {...homeObjThree}/> 
        <Footer/>
        </>
    );
}

export default Home; 
