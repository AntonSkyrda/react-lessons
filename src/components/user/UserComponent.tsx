import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";


type UserTypeProps = {
    user: IUser;
}

export const UserComponent: FC<UserTypeProps> = ({user}) => {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`posts/${user.id}`, {state: user})
    };
    return (
        <div>
            <Link to={"details"} state={user}>
                {user.username}
            </Link>
            <button className="flex px-2 py-2 bg-blue-600 text-white rounded transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={handleOnClick}>
                Go to details
            </button>
        </div>
    );
};