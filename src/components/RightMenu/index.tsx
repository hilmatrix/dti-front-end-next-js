import Image from "next/image";
import { FC, useState } from "react";
import Burger from "../../assets/burger.png";
import HandBackground from "../../assets/hand-background.png";
import Hand from "../../assets/hand.png";
import "./style.css";

const Index: FC = () => {
    const [isWide, setIsWide] = useState(false);

    const toggleWidth = () => {
        setIsWide(!isWide);
    };

    return (
        <div className="right-menu-absolute">
            <div className="right-menu-relative">
                <div className="right-hand-container">
                    <div className="right-hand">
                        <Image className="right-hand-background" src={HandBackground} alt="Hand Background"></Image>
                        <Image className="right-hand-icon" src={Hand} alt="Hand"></Image>
                        <span className="right-hand-text">Hi, <br></br>
                            I am Ayush Barnwal</span>
                    </div>
                </div>
                <div className={isWide ? 'right-menu-container open' : 'right-menu-container'}>
                    <div className="right-menu-close">
                        <button  onClick={toggleWidth}> X</button>
                    </div>
                    
                    <nav className="right-menu-nav">
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="right-menu-social">
                        <nav>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/hilmatrix/">LinkedIn</a></li>
                                <li><a href="https://www.twitter.com">Twitter</a></li>
                                <li><a href="https://www.instagram.com/hilmatrix">Instagram</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="right-menu-burger">
                    <Image src={Burger} onClick={toggleWidth} alt="Burger"></Image>
                </div>
            </div>
        </div>
    );
}

export default Index;