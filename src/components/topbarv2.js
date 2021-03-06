import * as React from "react"
import {useEffect } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {rightHamburgerMenu, middle, logoContainer,topbar, logo,topbarIconContainer,govImageContainer, govImage, topLeft, topRight} from "./topbarv2.module.css"
import { StaticImage } from "gatsby-plugin-image"
import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { Link } from "gatsby"
import {useSharedSignedInState} from './signupv2'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// Configure Firebase.
const firebaseConfig = {
    apiKey: 'AIzaSyAdC2-OS8crosJu0RL8N2f1YvOfWDJ0t6o',
    authDomain: 'hackathon-marriage.firebaseapp.com',
    projectId: 'hackathon-marriage',
    storageBucket: 'hackathon-marriage.appspot.com',
    messagingSenderId: '788084586238',
    appId: '1:788084586238:web:b3b039b523f5d5279797af',
    measurementId: 'G-21BQ4SFR4X'
  };


  firebase.initializeApp(firebaseConfig);


export default function TopbarV2() {

    const {isSignedIn, setIsSignedIn} = useSharedSignedInState();

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
          setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
      });

    if(!isSignedIn){
        return (
        
            <div className={topbar}>
                <div>
                    <Container>
                        <Row>
                            <Col xs={12} md={2} className={topLeft}>
                            <div>                  
                            <div className={govImageContainer}>
                                <StaticImage className={govImage} src="../images/Code-of-Arms-colour.png"/>
                            </div>
                            
                        </div>
                            </Col>
                            
                            <Col xs={12} md={8}>
                            <div className={middle}>
    
                                <div className={logoContainer}>
                            <Link  className={logo} to="/">Civil and National Registration</Link>
                            </div>
    
                            </div>
                            </Col>
                            
    
                            <Col xs={12} md={2}>
                                
                            <div className={topRight}>
                        <div className={topbarIconContainer}>
                                <InstagramIcon/>
                            </div>
    
                            <div className={topbarIconContainer}>
                                <TwitterIcon/>
                            </div>
    
                            <div className={topbarIconContainer}>
                                <FacebookIcon/>
                            </div>           
                        </div>
                            </Col>
                        </Row>
                    </Container>
    
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
                        <Container className={rightHamburgerMenu}>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                    <NavDropdown title="Services" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="/marriage-regist">Marriage Registration</NavDropdown.Item>
                                        <NavDropdown.Item href="/prop-regist">Property Instrument Registration</NavDropdown.Item>
                                        <NavDropdown.Item href="/surname-chang">Change of Surname</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="About Us" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Mission, Vision and Lorem</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Civil and National Registration Offices</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link eventKey={2} href="/register">
                                    Register
                                </Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        )
    
    }

    return (
        
        <div className={topbar}>
            <div>
                <Container>
                    <Row>
                        <Col xs={12} md={2} className={topLeft}>
                        <div>                  
                        <div className={govImageContainer}>
                            <StaticImage className={govImage} src="../images/Code-of-Arms-colour.png"/>
                        </div>
                        
                    </div>
                        </Col>
                        
                        <Col xs={12} md={8}>
                        <div className={middle}>

                            <div className={logoContainer}>
                        <Link  className={logo} to="/">Civil and National Registration</Link>
                        </div>

                        </div>
                        </Col>
                        

                        <Col xs={12} md={2}>
                            
                        <div className={topRight}>
                    <div className={topbarIconContainer}>
                            <InstagramIcon/>
                        </div>

                        <div className={topbarIconContainer}>
                            <TwitterIcon/>
                        </div>

                        <div className={topbarIconContainer}>
                            <FacebookIcon/>
                        </div>           
                    </div>
                        </Col>
                    </Row>
                </Container>

                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
                    <Container className={rightHamburgerMenu}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="Services" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/marriage-regist">Marriage Registration</NavDropdown.Item>
                                    <NavDropdown.Item href="/prop-regist">Property Instrument Registration</NavDropdown.Item>
                                    <NavDropdown.Item href="/surname-chang">Change of Surname</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="About Us" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Mission, Vision and Lorem</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Civil and National Registration Offices</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                            <NavDropdown title="Logout" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" >Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/" onClick={() => firebase.auth().signOut()}>Sign-out</NavDropdown.Item>
                                </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )

    }
