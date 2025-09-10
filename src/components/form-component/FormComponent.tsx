import {useForm} from "react-hook-form";

interface IFormComponentProps {
    username: string,
    password: string,
    age: number,
}

export const FormComponent = () => {

    const {handleSubmit, register} = useForm<IFormComponentProps>();

    const formHandler = (formDataProps: IFormComponentProps) => {
        console.log(formDataProps)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formHandler)}>
                <input type="text" {...register("username")}
                       />
                <input type="text" {...register("password")}
                       />
                <input type="number" {...register("age")}/>
                <button>Send</button>
            </form>
        </div>
    );
};