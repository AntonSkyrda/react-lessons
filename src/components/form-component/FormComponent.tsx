import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/user.validator.ts";

interface IFormComponentProps {
    username: string,
    password: string,
    age: number,
}

export const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid},
    } = useForm<IFormComponentProps>({
        mode: "onChange",
        resolver: joiResolver(userValidator)
    });

    const formHandler = (formDataProps: IFormComponentProps) => {
        console.log(formDataProps)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formHandler)}>
                <label>
                    <input type="text" {...register("username")}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>

                <label>
                    <input type="text" {...register("password")}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>

                <label>
                    <input type={"number"} {...register("age")}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>

                <button disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};