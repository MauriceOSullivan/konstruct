import React from 'react'; 
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink, 
} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
    return(
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> About Us </FooterLinkTitle>
                                    <FooterLink to='/signin'> How it works </FooterLink>
                                    <FooterLink to='/signin'> Testimonials </FooterLink>
                                    <FooterLink to='/signin'> Careers </FooterLink>
                                    <FooterLink to='/signin'> Investors </FooterLink>
                                    <FooterLink to='/signin'> Terms of Service </FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle> Contact </FooterLinkTitle>
                                    <FooterLink to='/signin'> Contact </FooterLink>
                                    <FooterLink to='/signin'> Support </FooterLink>
                                    <FooterLink to='/signin'> About Creators </FooterLink>
                  </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> Investors </FooterLinkTitle>
                                    <FooterLink to='/signin'> Sign In </FooterLink>
                                    <FooterLink to='/signin'> Portal </FooterLink>
                                    <FooterLink to='/signin'> Wiki </FooterLink>
                           </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle> Media </FooterLinkTitle>
                                    <FooterLink to='/signin'> Inquiries </FooterLink>
                                    <FooterLink to='/signin'> Previous Examples </FooterLink>
                                    <FooterLink to='/signin'> Stack </FooterLink>
                         </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'onClick={toggleHome}>
                                Konstruct
                            </SocialLogo>
                            <WebsiteRights> © {new Date().getFullYear()} Konstruct All Rights Reserved </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}


export default Footer; 