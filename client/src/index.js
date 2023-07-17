import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => { //username state'i her değiştiğinde konsola yazdır.
        console.log(`username state : ${username}`);
    }, [username]);

    useEffect(() => { //password state'i her değiştiğinde konsola yazdır.
        console.log(`password state : ${password}`);
    }, [password]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/api/login", {
                method : "POST",
                body : JSON.stringify({username, password}), //yollanacak veriyi json'a dönüştür.
                headers : {
                    "Content-Type" : "application/json"
                },
                credentials: 'include' //cookie için gerekli
            });
            if(!response.ok) {
                throw new Error("api call başarısız");
            }
            const data = await response.json();
            console.log(data); //data olarak başarılı - başarısız bilgisi gelecek, ona göre işlem yap.
        }
        catch(error) {
            console.error(error);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Login Formu</h1>
            <input 
                type = "text"
                name = "loginForm_username"
                placeholder = "kullanıcı adı"
                onChange = { (e) => setUsername(e.target.value) }
            />
            <input 
                type = "text"
                name = "loginForm_password"
                placeholder = "şifre"
                onChange = { (e) => setPassword(e.target.value) }
            />
            <input 
                type = "submit"
                name = "loginForm_submit"
                value = {"giriş yap"} 
            />
        </form>
        </>
    );
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);