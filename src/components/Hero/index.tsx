import Image from "next/image";
import { FC, useEffect, useState } from "react";
import HeroImage from "../../assets/hero.png";
import "./style.css";


const Index: FC = () => {
    const [leftOffset, setLeftOffset] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setLeftOffset(leftOffset => {return leftOffset < -1500 ? 1500 : leftOffset-15})
        }, 30); 
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    const newLeftOffset = leftOffset + "px";

    return (
        <div className="hero">
            <Image src={HeroImage} alt="Hero Image"></Image>
            <div className="running" style={{left : newLeftOffset}}>
                <span className="running-text">Webflow Developer - UI/UX Designer - Web Designer</span>
            </div>
        </div>
    );
}

export default Index;