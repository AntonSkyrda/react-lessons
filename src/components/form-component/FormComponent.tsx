import {useForm} from "react-hook-form";

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
        mode: "onChange"
    });

    const formHandler = (formDataProps: IFormComponentProps) => {
        console.log(formDataProps)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formHandler)}>
                <label>
                    <input type="text" {...register("username", {
                        required: {
                            value: true,
                            message: "value is required"
                        },
                        minLength: {
                            value: 4,
                            message: "wrong name",
                        }

                    })}
                    />

                    {errors.username && <div>{errors.username.message}</div>}

                </label>
                <label>
                    <input type="text" {...register("password", {
                        required: true,
                        minLength: {
                            value: 4,
                            message: "password too short",
                        },
                        maxLength: {
                            value: 6,
                            message: "password too long"
                        }
                    })}
                    />
                    {errors.password && <div>{errors.password.message}</div>}

                </label>
                <label>
                    <input type={"number"} {...register("age", {
                        required: true,
                        valueAsNumber: true,
                        min: {
                            value: 1,
                            message: "age too low"
                        },
                        max: {
                            value: 111,
                            message: "age too high"
                        }
                    })}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button>Send</button>
            </form>
        </div>
    );
};