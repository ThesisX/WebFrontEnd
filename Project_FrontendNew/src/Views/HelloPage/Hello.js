import React from 'react'
import axios from 'axios'

const Hello = () => {
    const BASE_URL = "http://127.0.0.1:8000"

    const getMe = async () => {
        await axios.get(BASE_URL + '/users/info')
        .then(res => {
            console.log("res : " + res)
        });
    }

    return (
        <div>
            <h1>Hello...</h1>
            <button onClick={getMe}>Get info.</button>
        </div>
    );
}

export default Hello
