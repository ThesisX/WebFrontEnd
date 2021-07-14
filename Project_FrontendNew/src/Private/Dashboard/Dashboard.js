import React from 'react'
// import axios from 'axios'
// import Cookies from "js-cookie";

const Dashboard = () => {

    // const getMe = async () => {
    //     await axios.get(BASE_URL + '/users/info')
    //         .then(res => {
    //             console.log("res : " + res)
    //         });
    // }

    // const [data, setData] = useState("");
    // const Auth = React.useContext(AuthApi);
    // const Token = React.useContext(TokenApi);

    // let toke = Token.token;
    // const headers = {
    //     Authorization: `Bearer ${toke}`,
    // };

    // const getdata = async () => {
    //     let res = await axios
    //         .get(BASE_URL + "/users/info", { headers })
    //         .then((response) => {
    //             return response.data.data;
    //         });
    //     return res;
    // };
    // React.useEffect(async () => {
    //     let x = await getdata();
    //     setData(x);
    //     console.log(x);
    // }, []);

    return (
        <div>
            <h2>Dashboard Page</h2>
        </div>
    );
}

export default Dashboard
