import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InputText from '../../components/Input/InputText'
import './style.css'
import axios from 'axios'

import api from '../../services/api'

const Cadastro = () => {

    useEffect(() => {
        api.get('pessoas')
            .then(res => {
                console.log(res);
            })

        const login = {
            'email': "pedro@gmail.com",
            'senha': "senha"
        }

        api.post('signin', { login })
            .then(res => {
                console.log(res.data)
            })

        const obj = {
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': "pedro@gmail.com",
                'senha': "senha",
            })
        }

        const url = 'http://127.0.0.1:5000/signin'

        fetch(url, obj)
            .then(res => res.json())
            .then(data => {
                console.log(data.token)
            })
    });

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)

    const handleSubmit = () => {

        console.log('nome: ', nome)

        const user = {
            email: email,
            senha: senha,
            nome: nome,
            idade: idade,
        }

        const obj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        }

        fetch('http://127.0.0.1:5000/pessoas', obj)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })

     /*    api.post('pessoas', { user }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            }) */

    }

    return (
        <div className="App">
            <div className="container">
                <h2>Cadastro de Usuário</h2>
                <p style={{ color: 'red' }} >Preencha todos os campos obrigatorios</p>

                <input type="text" placeholder="email" onChange={(v) => setEmail(v.target.value)}></ input> <br />
                <input type="text" placeholder="senha" onChange={(v) => setSenha(v.target.value)} /><br />
                <input type="text" placeholder="nome" onChange={(v) => setNome(v.target.value)} /><br />
                <input type="number" placeholder="idade" onChange={(v) => setIdade(v.target.value)} /> <br />
                <div>
                    <button onClick={handleSubmit}>cadastrar</button>
                </div>
                <Link to="/login">Página de Login</Link>
            </div>
        </div>
    )
}

export default Cadastro