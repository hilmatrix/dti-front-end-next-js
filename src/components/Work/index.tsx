import Image from "next/image";
import { FC, useState } from "react";
import LinkHover from "../../assets/link-hover.png";
import Link from "../../assets/link.png";
import "./style.css";

interface Props {
    siteName: string;
    description : string;
}

const Index: FC<Props> = ({siteName, description}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div id="work" className="work">
            <div className="work-left">
                <div className="work-up">
                 {siteName}
                 </div>
                 <div className="work-down">
                 {description}
                 </div>
            </div>
            <div className="work-right" >
                <Image src={isHovered ? LinkHover : Link} alt="Hoverable" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></Image>
            </div>
        </div>
    );
}

export default Index;