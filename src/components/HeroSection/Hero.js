import React, { useState } from 'react'; 
import { HeroContainer, HeroBg,  VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement';
import ReactPlayer from 'react-player';

const HeroSection = () => {
    const [hover, setHover] = useState(false); 

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <video
            autoPlay
            muted
            loop
            style={{ height: "100%", width: "120%", objectFit: "cover", outline: "none"}} //object-fit:cover
            >
            <source src='https://konstructvideo.s3.eu-west-2.amazonaws.com/video.mp4' type="video/mp4" />
            </video>
            <HeroContent>
                <HeroH1>Instant environments for impactful, yet simple Python/SQL projects.  </HeroH1>
                <HeroP>
                    Help non-engineer, high-achieving junior employees who know basic coding skills to create company-changing internal tools, prototypes, and products.
                </HeroP>
                <HeroBtnWrapper> 
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='false' >
                        Get Started {hover? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>       
    )
}

export default HeroSection; 
