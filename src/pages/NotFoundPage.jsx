import { Link } from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <section>
            <h1>Not Found 404</h1>
            <Link to={"./"}>Return to home</Link>
        </section>
    );
};