import React from 'react';
import './styles.css';

export default function Register() {

    return (
        <main className="box-sections">
            <div className="section-1">
                <h1>Faça seu login</h1>
                <form>
                    <input type="text" placeholder="Digite seu usuário..." />
                    <input type="password" placeholder="Digite sua senha..." />
                    <button>Login</button>
                </form>
            </div>
            <div className="section-2">
                <h1>Faça seu Cadastro</h1>
                <form className="box-form">
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="password" placeholder="Digite seu email..." />
                    <input type="number" placeholder="Digite seu telefone..." />
                    <input type="date" />
                    <input type="number" placeholder="Digite sua senha..." />
                    <button>Cadastrar</button>
                </form>
            </div>
            <div className="section-3">
                <h1>Alterar senha</h1>
                <form>
                    <input type="text" placeholder="Digite seu usuário..." />
                    <input type="password" placeholder="Digite sua senha..." />
                    <button>Alterar</button>
                </form>
            </div>
        </main>
    )
};