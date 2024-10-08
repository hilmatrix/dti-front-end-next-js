import Image from 'next/image';
import React from 'react';
import HeroCircle from "../../assets/hero-circle.png";
import "./style.css";

const Index: React.FC = () => {
  return (
    <div className='contact-info'>
        <div className='contact-info-image'>
            <Image src={HeroCircle} alt="Hero Circle"></Image>
        </div>
        <div className='contact-info-details'>
            <span className='title'>Contact Details</span>
            <span>ayush.barnwal@brightscout.com</span>
            <span>+91 8651447521</span>
        </div>
        <div className='contact-info-social'>
            <span className='title'>Social</span>
            <nav>
                <ul>
                    <li><a href="https://www.linkedin.com/in/hilmatrix/">LinkedIn</a></li>
                    <li><a href="https://www.twitter.com">Twitter</a></li>
                    <li><a href="https://www.instagram.com/hilmatrix">Instagram</a></li>
                    <li>Webflow</li>
                    <li>Figma</li>
                </ul>
            </nav>
        </div>
    </div>
  );
}

export default Index;
