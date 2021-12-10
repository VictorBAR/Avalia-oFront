import React, { useState } from 'react'
import { Navigate } from 'react-router'
import InputText from '../../components/Input/InputText'
import Button from '../../components/Button/Button'

const Login = () => {

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [redirectTo, setRedirectTo] = useState(false)

    const onSubmit = () => {

        const user = {
            email: login,
            senha: senha,
        }

        const obj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        }

        const token = ''

        fetch('http://127.0.0.1:5000/signin', obj)
            .then(res => res.json())
            .then(data => {
                console.log(data.token)
                sessionStorage.setItem('token', data.token)
                setRedirectTo(true)
            })
    }

    if(redirectTo) return (<Navigate to="/" />)
    return (
        <div>
            <h1>Pagina Login</h1>
            <InputText placeholder="Email" tipoInput="login"/>
            <InputText placeholder="Senha" senha={true} tipoInput="login" />
            <Button nome="Login" />
            <br />
            <input type="text" placeholder="Email" value={login} onChange={(v) => setLogin(v.target.value)} /><br />
            <input type="text" placeholder="Senha" value={senha} onChange={v => setSenha(v.target.value)} /><br />
            <button onClick={onSubmit} >Login</button>
        </div>
    )
}

export default Login