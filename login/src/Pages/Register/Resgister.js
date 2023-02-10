import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import Message from '../../Components/Message/Message'

// Reducer
import { register, reset } from '../../slices/authSlice'

const Resgister = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()

    const {loading, error} = useSelector((state) => state.auth)



    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name,
            email,
            password,
            confirmPassword
        }

        console.log(user)

        dispatch(register(user))

    }

    useEffect(() => {

        dispatch(reset())

    }, [dispatch])

  return (
    <div className="box">
        <div id='main'>
            <div className='txt-form'>
                <h2>Cadastre-se</h2>
                <p>É rápido e fácil.</p>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)} value={name || ""} />
                </label>
                <label>
                    <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email || ""} />
                </label>
                <label>
                    <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password || ""} />
                </label>
                <label>
                    <input type="password" placeholder='Confirme a senha' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword || ""} />
                </label>
                {!loading && <button id='btn'><p>Criar</p></button>}
                {loading && <button id='btn' disabled><p>Arguarde</p></button>}
                {error && <Message msg={error} type="error"/>}
            </form>
            <div className="atalho">
                <p>Já possui conta? <Link to="/login"><span>Entrar</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default Resgister