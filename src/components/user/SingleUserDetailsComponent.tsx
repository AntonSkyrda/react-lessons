import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IUser;
}

export const SingleUserDetailsComponent: FC<UserPropsType> = ({user}) => {
    return (
        <div>
            <p>
                {user.email}
            </p>
        </div>
    );
};