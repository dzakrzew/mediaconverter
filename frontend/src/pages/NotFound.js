import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <div>
            <h1>404 -- Not found</h1>
            <Link to="/">Go to home page</Link>
        </div>
    );
};