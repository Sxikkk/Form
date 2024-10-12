import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import MyA from "../UI/MyA/MyA";

    interface FormProps {
        createUser: (info: string[]) => void;
        type: string;
        display: string;
        changeForm?: () => void;
        changeFormText?: string;
    }

const Form: React.FC<FormProps>= ({createUser, type, display, changeForm, changeFormText}) => {

    const [username, setUsername] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    let userName: string;
    let userPassword: string;
    let userInfo: [string, string];

    const handlerInputChangeName = (newValue: string) => {
        setUsername(newValue);
        userName = newValue;
    }

    const handlerInputChangePassword = (newValue: string) => {
        setPassword(newValue);
        userPassword = newValue;
    }

    const clickButton = () => {
        if (username.trim() !== "" && password.trim() !== "") {
            userInfo = [username, password];
            createUser(userInfo);
        }
        else
            alert("Заполните все поля")
    }

    return (
        <form style={{ display: display }}>
            <MyInput
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={handlerInputChangeName}
            />
            <MyInput
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlerInputChangePassword}
            />
            <MyButton
                defaultValue={type}
                click={clickButton}
            />
            <MyA
                defaultValue={changeFormText}
                changeForm={changeForm}
            />
        </form>
    );
};

export default Form;