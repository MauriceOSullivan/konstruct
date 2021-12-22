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
            <HeroContent>
                <HeroH1>Instant environments for impactful, yet simple Python/SQL projects.  </HeroH1>
                <HeroP>
                    Help high-achieving junior employees who know basic coding skills to create company-changing internal tools, prototypes, and products.
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
