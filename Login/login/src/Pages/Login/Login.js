import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Message from '../../Components/Message/Message'

// Redux
import { login, reset } from '../../slices/authSlice'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const {loading, error} = useSelector((state) => state.auth)

  const handleLogin = (e) => {
    e.preventDefault()

    const user = {
      email,
      password
    }
    
    dispatch(login(user))

  }

  useEffect(() => {

    dispatch(reset())

  }, [dispatch])

  return (
    <div className="box">
      <div id='main'>
        <div className="txt-form">
          <h2>Login</h2>
        </div>
        <form className='form' onSubmit={handleLogin}>
          <label>
              <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
          </label>
          <label>
              <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password || ""}/>
          </label>
          <label className='lbl-check'>
            <input type="checkbox" name="continuar logado" id="checkbox" /> 
            <p>Lembre-se de mim</p>
          </label>
          {!loading && <button id='btn'><p>Entrar</p></button>}
          {loading && <button id='btn' disabled><p>Arguarde</p></button>}
          {error && <Message msg={error} type="error"/>}
        </form>
        <div className="atalho">
          <p>Não possui conta? <Link to="/register"><span>Registre-se</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login