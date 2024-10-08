import { FC } from "react";
import Work from "../Work/index";
import "./style.css";

const Index: FC = () => {
    return (
        <div className="recent-work">
            <div className="left">
                Recent Work
            </div>
            <div className="right">
                <Work siteName={"Decodable.co"} description={"Brand Design - Webflow Development - Web Design"}/>
                <hr></hr>
                <Work siteName={"Gofirefly.io"} description={"Brand Design - Webflow Development - Web Design"}/>
                <hr></hr>
                <Work siteName={"Blinkops.com"} description={"Brand Design - Webflow Development - Web Design"}/>
                <hr></hr>
                <Work siteName={"Withkanvas.com"} description={"Brand Design - Webflow Development - Web Design"}/>
            </div>
        </div>
    );
}

export default Index;