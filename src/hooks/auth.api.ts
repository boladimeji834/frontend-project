import { useState } from "react";
import axios from "axios";

export default function useAuthApi () {
    const [ user, setUser ] = useState();

    async function signUp (name: string, password: string, email: string) {
        axios.post('http://localhost:4000/auth/signup', {
            name: name, 
            password: password, 
            email: email
        })
        .then((e) => {
            console.log(e)
        })
        .catch(e => {
            console.log(e)
        })

    }

    async function login (password: string, email: string) {
        axios.post('http://localhost:4000/auth/login', {
            password: password, 
            email: email
        })
        .then((e) => {
            console.log(e)
        })
        .catch(e => console.log(e))
            
       
    }

    return { 
        signUp,
        user,
        login
    }
}