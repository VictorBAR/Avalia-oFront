import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router'
import './style.css'

import InputText from '../../components/Input/InputText'
import InputNumber from '../../components/Input/InputNumber'
import Button from '../../components/Button/Button'

const Cadastro = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [redirectTo, setRedirectTo] = useState(false)

    const onSubmit = () => {

        const user = {
            email: email,
            senha: senha,
            nome: nome,
            idade: idade,
        }

        if (email === '' || senha === '' || nome === '' || idade === '') {
            window.alert('Erro! Preencha todos os campos para fazer o cadastro!')
            return
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
                if(data !== '' && data !== undefined){
                    window.alert('Usuário cadastrado com sucesso!')
                    setRedirectTo(true)
                }else{
                    window.alert('Erro ao cadastrar usuário')
                }

            })
            .catch(err => {
                console.log(err)
            })
    }
    if(redirectTo) return (<Navigate to="/login" />)
    return (
        <div className="master">
            <div className="main">
                <h1>Cadastro de Usuário</h1>
                <p style={{ color: '$B14623' }} >Preencha todos os campos obrigatorios</p>
                <InputText placeholder="Email" tipoInput="cadastro" value={email} setValue={(v) => setEmail(v.target.value)} />
                <InputText placeholder="Senha" senha={true} tipoInput="cadastro" value={senha} setValue={(v) => setSenha(v.target.value)} />
                <InputText placeholder="Nome" tipoInput="cadastro" value={nome} setValue={(v) => setNome(v.target.value)} />
                <InputNumber placeholder="Idade" value={idade} setValue={(v) => setIdade(v.target.value)} />
                <Button nome="Cadastrar" quandoClicar={onSubmit} />
                <Link className="estiloLink" to="/login">Página de Login</Link>
            </div>
        </div>
    )
}

export default Cadastro