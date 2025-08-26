import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((response) => {
                setUsers(response);
            })
    }, [])
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user} />)
            }
        </div>
    )
}