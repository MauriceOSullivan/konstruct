 import React, {useEffect, useState} from 'react'
 import {FaBars} from 'react-icons/fa'
 import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
 import {BrowserRouter as Router} from 'react-router-dom'
 import { animateScroll as scroll  } from 'react-scroll'

 const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Konstruct </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars /> 
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >About</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Projects</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Security" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Security</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Sign up</NavLinks> 
                        </NavItem>
                    </NavMenu>
                    <NavBtn> 
                        <NavBtnLink to="signin"> Sign In </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
 };

 export default Navbar; 