import { FC } from "react";
import Testimony from "../Testimony/index";
import "./style.css";

import Testimony1 from "../../assets/testimony-1.png";
import Testimony2 from "../../assets/testimony-2.png";

const Index: FC = () => {
    return (
        <div className="testimonials">
            <div className="testimonials-left">
                Testimonials
            </div>
            <div className="testimonials-right">
                <Testimony name="Ayus Raj" title="VP of Marketing @ Webflow" profile={Testimony1}
                    testimony="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” "></Testimony>
                
                <Testimony name="Alex Cattoni" title="Founder @ CopyPossy" profile={Testimony2}
                    testimony="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” "></Testimony>
            </div>
        </div>
    );
}

export default Index;