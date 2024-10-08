import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import "./style.css";

interface Props {
    images: StaticImageData[];
}

const Index: FC<Props> = ({images}) => {
    const arrayOfImages = [];

    for (let loop=0; loop < images.length; loop++) {
        arrayOfImages.push(<Image src={images[loop]} alt="Work"/>);
    }
    
    return (
        <div className="work-strip">
            {arrayOfImages}
        </div>
    );
}


export default Index;