import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function valider() {
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: email,
                password: password,
                expiresInMins: 30, // optional, defaults to 60
            }),
            credentials: 'include' // Include cookies (e.g., accessToken) in the request
        });
        const data = await res.json();
        localStorage.setItem('token', data.accessToken);
        console.log(data);
    }
    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="mail" /><br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" /><br />
                <input type="button" value="valider" onClick={valider} />
                <h3>{email}</h3>
                <h3>{password}</h3>
            </div>
        </>
    )
}

export default Login;