import {MyContext} from "../context/MyContext.tsx";
import {useContext} from "react";

export const LeftBranchA = () => {
    const {counterValue}= useContext(MyContext);
    return (
        <div>
            Left Branch A
            <p>
                Current counter value = {counterValue}
            </p>
        </div>
    );
};