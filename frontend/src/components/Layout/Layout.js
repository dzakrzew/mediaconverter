import { Navbar } from "../Navbar";
import "./Layout.scss";

export const Layout = ({ children }) => {
    return (
        <div className="app">
            <Navbar />
            <div className="container text-center">
                {children}
            </div>
        </div>
    );
};