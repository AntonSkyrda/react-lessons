import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";


type UserTypeProps = {
    user: IUser;
}

export const UserComponent: FC<UserTypeProps> = ({user}) => {
    return (
        <div>
            {user.username}
        </div>
    );
};