import React from 'react';

class User{
    name: string;
    password: string;
    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }
}

export const createUser = (info: string[], Users: object[]) => {
    let existCount = 0;
    Users.forEach((user) => {
        if (user !== info) {
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


export default User;