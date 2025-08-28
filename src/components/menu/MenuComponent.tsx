import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/a"}>A page</Link>
                </li>
                <li>
                    <Link to={"/b"}>B page</Link>
                </li>
            </ul>
        </div>
    );
};