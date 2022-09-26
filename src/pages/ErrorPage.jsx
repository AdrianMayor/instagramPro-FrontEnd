import { Link } from "react-router-dom";

export const NotFoundPage = ({ error }) => {
    return (
        <section>
            <h1>{error}</h1>
            <Link to={"./"}>HOME</Link>
        </section>
    );
};