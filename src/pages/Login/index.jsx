import React, { useState } from 'react'
import { Navigate } from 'react-router'
import InputText from '../../components/Input/InputText'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

import './style.css'

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

        fetch('http://127.0.0.1:5000/autenticar', obj)
            .then(res => res.json())
            .then(data => {
                if(data.token !== undefined && data.token !== ''){
                    sessionStorage.setItem('token', data.token)
                    setRedirectTo(true)
                }else{
                    window.alert('Erro, Email ou senha incorretos')
                }
            })
    }

    if (redirectTo) return (<Navigate to="/" />)
    return (
        <div className="master">
            <div className="main" >
                <h1>Acesse o sistema</h1>
                <InputText placeholder="Email" tipoInput="login" value={login} setValue={(v) => setLogin(v.target.value)} />
                <InputText placeholder="Senha" senha={true} tipoInput="login" value={senha} setValue={(v) => setSenha(v.target.value)} />
                <Button nome="Login" quandoClicar={onSubmit} />
                <Link to="/cadastro" className="estiloLink" >Não tem cadastro? Cadastre-se</Link>
            </div>
        </div>
    )
}

export default Login