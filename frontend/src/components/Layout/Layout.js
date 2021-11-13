import { Navbar } from "../Navbar"

export const Layout = ({ children }) => {
    return (
        <div className="app">
            <Navbar />
            {children}
        </div>
    );
};