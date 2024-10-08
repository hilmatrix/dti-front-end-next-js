import { FC } from "react";
import "./style.css";

const Index: FC = () => {
    return (
        <header>
            <div className="name">
                @Ayush Barnwal
            </div>
            <nav>
                <ul>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#work">Work</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Index;