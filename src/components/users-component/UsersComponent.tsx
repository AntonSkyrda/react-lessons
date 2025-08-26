import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [user, setUser] = useState<IUser | null>(null)
    useEffect(() => {
        getUsers()
            .then((response) => {
                setUsers(response);
            })
    }, [])
    const userDetails = (user: IUser) => {
        setUser(user);
    }
    return (
        <div>
            {
                user && <div>{JSON.stringify(user)}</div>
            }
            {
                users.map(user => <UserComponent userDetails={userDetails} key={user.id} item={user}/>)
            }
        </div>
    )
}