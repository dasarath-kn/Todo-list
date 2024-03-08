import React from "react";
import { useState } from "react";
import HomePage from "./homePage";


function signIn() {
    let [value, setValues] = useState({ username: "user", pass: "12345" })
    let [user, setuser] = useState({ username: "" })
    let [pass, setPass] = useState({ password: "" })
    let [loading, setloading] = useState(false)
    function validation() {
        {
            if (value.username == user.username && value.pass == pass.password) {
                console.log("correct");
                setloading(!loading)


            }
        }
    }

    return (
        <>
            {
                !loading ?
                    <>
                        <h1>SignIn</h1>
                        <input onChange={((e) => { setuser({ username: e.target.value, pass: "" }) })} type="text" value={user.username} placeholder="username" />
                        <input onChange={((e) => { setPass({ password: e.target.value }) })} type="number" value={pass.password} placeholder="password" />
                        <button onClick={validation} >login</button>
                    </>
                    : <>
                    <HomePage />
                    <button onClick={()=>{setloading(!loading)}}>logout</button>
                    </>
            }
        </>
    )

}



export default signIn;