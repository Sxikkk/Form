import React from 'react';
import './App.css';
import Form from "./Components/Form/Form";
import {createUser} from "./utils/user";

function App() {

    let Users = [{name: 'admin', password: 'admin'}];
    const unVisible = "none"
    const visible = "block"

    class User{
        name: string;
        password: string;
        constructor(name: string, password: string) {
            this.name = name;
            this.password = password;
        }
    }

    const createUser = (info: string[]) => {
        let existCount = 0;
        Users.forEach((user) => {
            if (user.name !== info[0]) {
                existCount++;
            }
        })
        if (existCount === Users.length) {
            Users.push(new User(info[0], info[1]))
            existCount = 0;
            alert("Вы успешно зарегистрировались!")
        } else {
            alert("Пользователь с таким именем уже сущестует")
        }
    }

    //const create = createUser(info, Users);

    const findUser = (info: string[]) => {
        let unsuitable = 0;
        Users.forEach((user) => {
            if (user.name !== info[0] || user.password !== info[1]) {
                unsuitable++;
            }
        })
        if (unsuitable === Users.length) {
            alert("Неправильный логин или пароль")
        } else {
            alert("Добро пожаловать, " + info[0] + "!")
        }
    }

  return (
    <div className="App">
        <Form createUser={createUser} type="Регистрация" display={visible}/>
        <Form createUser={findUser} type="Войти" display={visible}/>
    </div>
  );
}

export default App;
