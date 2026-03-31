import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>Home Page</Link>
                </li>
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li>
                    <Link to={"/auth/resources"}>Resources</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};