import {useLocation} from "react-router-dom";
import type {IUser} from "../models/IUser.ts";
import {SingleUserDetailsComponent} from "../components/user/SingleUserDetailsComponent.tsx";

export const SingleUserDetailsPage = () => {

    const {state} = useLocation();
    const user = state as IUser;
    return (
        <div>
            <SingleUserDetailsComponent key={user.id} user={user}/>
        </div>
    );
};