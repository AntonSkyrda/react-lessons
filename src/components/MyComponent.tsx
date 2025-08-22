import type {FC} from "react";

type MyComponentPropType = { text: string }

const MyComponent: FC<MyComponentPropType> = ({text})=> {
    return <div className="h-screen flex items-center justify-center bg-slate-900 text-white">{text}</div>
}

export default MyComponent;
