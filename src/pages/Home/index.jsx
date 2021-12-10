import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

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
        <div className="main" >
            <h1>Pagina Inicial</h1>
            <h2>Seja Bem vindo ao nosso site {nome}</h2>
        </div>
    )
}

export default Home