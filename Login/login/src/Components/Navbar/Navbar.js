import { Link, NavLink } from "react-router-dom"

import './Navbar.css'

// hooks
import { useAuth } from "../../Hooks/useAuth"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

// Redux 
import { logout, reset } from "../../slices/authSlice"

const Navbar = () => {

    const { auth } = useAuth()
    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleLogout = () => {

        dispatch(logout())
        dispatch(reset())

        navigate("/login")
    }

  return (
    <nav>
        <div>
            <Link to="/">
                <h2>Logo</h2>
            </Link>
        </div>
        <ul id='nav-links'>
            {auth ? (
                <>
                    {user && (
                        <li>
                            <p onClick={handleLogout}>Sair</p>
                        </li>
                    )}
                </>
            ) : (
                <>
                    <li>
                        <NavLink to="/login">
                            <p>Login</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">
                            <p>Cadastrar</p>
                        </NavLink>
                    </li>
                </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar