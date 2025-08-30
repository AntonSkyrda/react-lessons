import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user/UserComponent.tsx";
import {userService} from "../../service/api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers().then((allUsers) => {
            setUsers(allUsers);
        })
    }, [])


    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user} />)
            }
        </div>
    );
};