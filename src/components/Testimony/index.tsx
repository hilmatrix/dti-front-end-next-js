import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import "./style.css";

interface Props {
    name : string,
    title : string,
    profile : StaticImageData,
    testimony : string
}

const Index: FC<Props> = ({name, title, profile, testimony}) => {
    return (
        <div className="testimony">
            <div className="testimony-up">
                {testimony}
            </div>
            <div className="testimony-down">
                <div className="testimony-image">
                    <Image src={profile} alt="profile"></Image>
                </div>
                <div className="testimony-details">
                    <div className="testimony-name">
                        {name}
                    </div>
                    <div className="testimony-title">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;