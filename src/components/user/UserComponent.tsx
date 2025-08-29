import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";


type UserTypeProps = {
    user: IUser;
}

export const UserComponent: FC<UserTypeProps> = ({user}) => {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate("details", {state: user})
    };
    return (
        <div>
            <Link to={"details"} state={user}>
                {user.username}
            </Link>
            <button onClick={handleOnClick}>
                Go to details
            </button>
        </div>
    );
};