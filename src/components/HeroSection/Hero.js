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
            <HeroBg>
                    <ReactPlayer
                    url='https://konstructvideo.s3.eu-west-2.amazonaws.com/video.mp4'
                    playing={true}
                    loop={true}
                    muted={true}
                    controls={false}
                    width='100%'
                    height='100%' 
                    id="VideoBg"
                    object-fit= 'cover' 
                    />
            </HeroBg>n
            <HeroContent>
                <HeroH1>Instant environments for impactful, yet simple Python/SQL projects.  </HeroH1>
                <HeroP>
                    Help non-engineer, high-achieving junior employees create company-changing internal tools, prototypes, and products.
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
