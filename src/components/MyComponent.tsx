import type {FC, ReactNode} from "react";

type MyComponentType = {
    title: string;
    children?: ReactNode;
}

export const MyComponent: FC<MyComponentType> = ({title, children}) => {
    return (
        <div className="text-3xl font-bold underline">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
};

export default MyComponent;
