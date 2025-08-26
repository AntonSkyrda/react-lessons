import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropType = {
    item: IUser;
    userDetails: (user: IUser) => void;
}

export const UserComponent: FC<UserPropType> = ({item, userDetails}) => {
    return (
        <>
            <div>{item.name}</div>
            <button onClick={() => userDetails(item)}>
                details
            </button>
        </>
    )
}