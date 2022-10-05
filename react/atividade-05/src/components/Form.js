import { useState } from 'react'
import './Form.module.css'

function Form() {
    function resgisterUser(user) {
        user.preventDefault()
        document.getElementById("result").textContent = `Usuário ${name} cadastrado com a senha ${password}`
        document.getElementById("name").value = ``
        document.getElementById("password").value = ``
    }

    let result = ''
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={resgisterUser}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu usuário" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
                <div>
                    <p id="result">{result}</p>
                </div>
            </form>
        </div>
    )
}

export default Form