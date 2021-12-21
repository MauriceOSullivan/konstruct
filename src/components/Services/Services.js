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
        <ServicesContainer id="projects">
            <ServicesH1>Sample Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Excel API/Get Requests </ServicesH2>
                    <ServicesP>Automated API Calls and Emails </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Data Deep Dives</ServicesH2>
                    <ServicesP>Simple SQL Analysis from databases such as Snowflake or AWS Redshift </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Report Generation </ServicesH2>
                    <ServicesP>Consolidate different processes </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;