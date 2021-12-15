import React from 'react'; 
import { homeObjTwo } from '../InfoSection/Inputs';
import {
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP
} from './ServiceElements'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg2.svg'
import Icon3 from '../../images/svg3.svg'


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virutual Offices</ServicesH2>
                    <ServicesP>Access Platform. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Benefits </ServicesH2>
                    <ServicesP>Unlock Membership </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;