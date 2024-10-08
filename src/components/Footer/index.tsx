import { FC } from "react";
import "./style.css";

const Index: FC = () => {
    return (
        <footer>
            <div className="footer-left">
                <span className="build-with">Build with by Hilmatrix (Hilman Mauludin)</span>
            </div>
            <div className="footer-right">
                <nav>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/hilmatrix/">LinkedIn</a></li>
                        <li><a href="https://www.twitter.com">Twitter</a></li>
                        <li><a href="https://www.instagram.com/hilmatrix">Instagram</a></li>
                        <li><a>Webflow</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Index;