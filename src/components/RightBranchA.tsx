import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const RightBranchA = () => {
    const {counterValue, increment} = useContext(MyContext)

    return (
        <div>
            Right Branch A
            <button onClick={() => {
                increment(counterValue)
            }}>
                Increment Left Branch A
            </button>
        </div>
    );
};