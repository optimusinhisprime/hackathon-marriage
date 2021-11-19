import * as React from "react"
import "./footer.module.css"
import {footer,footerWrapper, bottomLeft,bottomRight, middle, copyrightContainer, additionalContent} from "./footer.module.css" 
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer () {
    return (
        <div >
            
            <div className={footerWrapper}>

                <div className={additionalContent}>

                <div className={bottomLeft}>
                    <div>
                        <span>Useful Links</span>
                    </div>
                    <ul>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                    </ul>
                </div>

                <div className={middle}>
                <div>
                        <span>Useful Links</span>
                    </div>
                    <ul>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                    </ul>
                </div>

                <div className={bottomRight}>
                    <div>
                        <span>Useful Links</span>
                    </div>
                    <ul>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                    </ul>
                </div>
                </div>
                
                <div className={copyrightContainer}>
                        <span className="copyright">Copyright 2021 Elite Minds </span>
                </div>

                </div>
                

            </div>
       
    )
}