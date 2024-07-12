import Sidebar from "./Sidebar";
import Research from "./Research";
import Main from "./Main";

import '../styles/Homepage.css';

export default function Homepage() {
    return (
    <div className="homepage-wrap">
        <Sidebar />
        <div>
            <Research />
            <Main />
        </div>
    </div>
    );
}