import React, { useState } from 'react'
import axios from 'axios'
import Cookies from "js-cookie";
const AuthApi = React.createContext();
const TokenApi = React.createContext();

const Hello = () => {
    const BASE_URL = "http://127.0.0.1:8000"

    const getMe = async () => {
        await axios.get(BASE_URL + '/users/info')
            .then(res => {
                console.log("res : " + res)
            });
    }

    const [data, setData] = useState("");
    const Auth = React.useContext(AuthApi);
    const Token = React.useContext(TokenApi);
    const handleonclick = () => {
        Auth.setAuth(false);
        Cookies.remove("token");
    };

    let toke = Token.token;
    const headers = {
        Authorization: `Bearer ${toke}`,
    };

    const getdata = async () => {
        let res = await axios
            .get(BASE_URL + "/users/info", { headers })
            .then((response) => {
                return response.data.data;
            });
        return res;
    };
    React.useEffect(async () => {
        let x = await getdata();
        setData(x);
        console.log(x);
    }, []);

    return (
        <div>
            <h2>Hello</h2>
            <button onClick={handleonclick}>Logout</button>
            <h1>{data}</h1>
        </div>
    );
}

export default Hello
