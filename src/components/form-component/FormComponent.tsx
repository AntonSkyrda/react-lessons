import {type FormEvent, useState} from "react";

interface IFormComponentProps {
    username: string,
    password: string,
}

export const FormComponent = () => {

    const [formState, setFormState] = useState<IFormComponentProps>({
        username: "",
        password: "",
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user = {
            username: formState.username,
            password: formState.password,
        }
        console.log(user)
    }

    // const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value)
    //     setFormState({...formState, username: input.value})
    // }
    //
    // const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value)
    //     setFormState({...formState, password: input.value})
    // }
    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input);
        setFormState({...formState, [input.name]: input.value});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={"username"} placeholder="Username" value={formState.username}
                       onChange={handleInputChange}/>
                <input type="text" name={"password"} placeholder="Password" value={formState.password}
                       onChange={handleInputChange}/>
                <button>Send</button>
            </form>
        </div>
    );
};