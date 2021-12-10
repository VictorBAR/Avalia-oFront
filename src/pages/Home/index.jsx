import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const[nome, setNome] = useState('')

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            let senha = 'senhaSuperSecretaESegura';
            var header = {
                method: 'GET',
                headers: {
                    'authorization': sessionStorage.getItem('token'),
                    'x-api-key': senha
                },
                mode: 'cors',
                cache: 'default'
            }
            fetch('http://127.0.0.1:5000/pessoa', header)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setNome(data.nome)
                })
        }
    })

    return (
        <div>
            <h1>Pagina Home</h1>
            <h2>Seja Bem vindo {nome}</h2>
            <Link to="/Login">Login</Link>
        </div>
    )
}

export default Home